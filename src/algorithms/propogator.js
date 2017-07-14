import DataProvider from '../data/graph1.js';

//here we're focusing on graph propogation. So mocking the probability update 
var ProbabilityMarker = {
    markClaim: function(claim){
        claim.updated += 1;
    },
    markArg: function(arg){
        arg.updated += 1;
    }
}


// Beginning with a claim, propagate state updates upwards in the graph
//Basic overview, breadth first, hold it all in memory. Should be good to go for a while!
function propagateFrom(node, type){
    var claimsAbove = [];
    var argsAbove = [];
    var thereAreLayersAbove = false;
    var currentLayerType;

    //init - the first layer
    if (type === "claim") {
        argsAbove = DataProvider.getArgsUsingClaim(node);
        if (argsAbove.length > 0){
            thereAreLayersAbove = true;
        }
        currentLayerType = "args";
    } else if (type === "arg") {
        claimsAbove = DataProvider.getClaimsUsingArg(node);
        if (claimsAbove.length > 0){
            thereAreLayersAbove = true;
        }
        currentLayerType = "claims";
    }


    while(thereAreLayersAbove) {
        if (currentLayerType === "args") {
            //update all the args in this layer
            for (let i = 0; i < argsAbove.length; i++) {
                ProbabilityMarker.markArg(argsAbove[i]);
            }

            //get all the claims in the next layer
            for (let i = 0; i < argsAbove.length; i++) {
                var claimsToAdd = DataProvider.getClaimsUsingArg(argsAbove[i]);
                claimsAbove = claimsAbove.concat(claimsToAdd);
            }
            claimsAbove = removeDupes(claimsAbove);

            //check if we finished
            if (claimsAbove.length === 0){
                thereAreLayersAbove = false;
            } else {
                //reset argsAbove and swap back to claims
                argsAbove = [];
                currentLayerType = "claims";
            }

        } else {
            //update all the claims in this layer
            for (let i = 0; i < claimsAbove.length; i++){
                ProbabilityMarker.markClaim(claimsAbove[i]);
            }

            //get all the args in the next layer
            for (let i = 0; i < claimsAbove.length; i++) {
                var argsToAdd = DataProvider.getArgsUsingClaim(claimsAbove[i]);
                argsAbove = argsAbove.concat(argsToAdd);
            }

            argsAbove = removeDupes(argsAbove);

            //check if we finished
            if (argsAbove.length === 0){
                thereAreLayersAbove = false;
            } else {
                //rset claimsAbove and swap back to args
                claimsAbove = [];
                currentLayerType = "args";
            }
        }
    }

    //end - return the updated data
    return {
        claims: DataProvider.getClaims(),
        args:DataProvider.getArgs(),
        links: DataProvider.getLinks()
    }
}

function removeDupes(nodeArray){
    var newNodeArray = [];

    nodeArray.forEach(function(candidateNode){
        var pass = true;
        newNodeArray.some(function(qualifiedNode){
            if (qualifiedNode.id === candidateNode.id) {
                pass = false;
                return true; //cuts it short
            }
            return false;
        });
        if (pass) {
            newNodeArray.push(candidateNode);
        }
    });

    return newNodeArray;
}

export default {
    propagateFrom:propagateFrom
}