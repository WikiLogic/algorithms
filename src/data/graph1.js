
function getClaims(claim){
    return [
        { id: 'claimStarter', text: 'claimStarter', probability: 0.5 },
        { id: 'claim1', text: 'claim1', probability: 0.5 },
        { id: 'claim2', text: 'claim2', probability: 0.5 },
        { id: 'claim3', text: 'claim3', probability: 0.5 },
        { id: 'claim4', text: 'claim4', probability: 0.5 },
        { id: 'claim5', text: 'claim5', probability: 0.5 },
        { id: 'claim6', text: 'claim6', probability: 0.5 },
        { id: 'claim7', text: 'claim7', probability: 0.5 }
    ]
}

function getArgs(claim){
    return [
        { id: 'arg1', text: 'arg1', probability: 0.5 },
        { id: 'arg2', text: 'arg2', probability: 0.5 },
        { id: 'arg3', text: 'arg3', probability: 0.5 },
        { id: 'arg4', text: 'arg4', probability: 0.5 },
        { id: 'arg5', text: 'arg5', probability: 0.5 },
        { id: 'arg6', text: 'arg6', probability: 0.5 },
        { id: 'arg7', text: 'arg7', probability: 0.5 },
        { id: 'arg8', text: 'arg8', probability: 0.5 }
    ]
}

function getLinks(){
    return [
        { id:"1", type: "OPPOSES", src: "arg1", tgt: "claim1" },
        { id:"2", type: "OPPOSES", src: "arg3", tgt: "claim1" },
        { id:"3", type: "SUPPORTS", src: "arg2", tgt: "claim2" },
        { id:"4", type: "OPPOSES", src: "arg4", tgt: "claim2" },
        { id:"5", type: "SUPPORTS", src: "arg5", tgt: "claim3" },
        { id:"6", type: "OPPOSES", src: "arg6", tgt: "claim3" },
        { id:"7", type: "OPPOSES", src: "arg6", tgt: "claim4" },
        { id:"8", type: "SUPPORTS", src: "arg7", tgt: "claim4" },
        { id:"9", type: "SUPPORTS", src: "arg7", tgt: "claim5" },
        { id:"11", type: "OPPOSES", src: "arg8", tgt: "claim5" },
        { id:"12", type: "USED_IN", src: "claim6", tgt: "arg5" },
        { id:"13", type: "USED_IN", src: "claim6", tgt: "arg6" },
        { id:"14", type: "USED_IN", src: "claimStarter", tgt: "arg6" },
        { id:"15", type: "USED_IN", src: "claimStarter", tgt: "arg7" },
        { id:"16", type: "USED_IN", src: "claim7", tgt: "arg7" },
        { id:"17", type: "USED_IN", src: "claim7", tgt: "arg8" },
        { id:"18", type: "USED_IN", src: "claim3", tgt: "arg1" },
        { id:"19", type: "USED_IN", src: "claim3", tgt: "arg2" },
        { id:"20", type: "USED_IN", src: "claim4", tgt: "arg2" },
        { id:"21", type: "USED_IN", src: "claim4", tgt: "arg3" },
        { id:"22", type: "USED_IN", src: "claim5", tgt: "arg3" },
        { id:"23", type: "USED_IN", src: "claim5", tgt: "arg4" }
    ]
}

function getArgsUsingClaim(claim) {
    //We're going up
    
    //1. find the links with the given claim as a src, save the arg ids refrenced in those links
    var returnArgIds = [];
    var links = getLinks();
    links.forEach(function(link){
        if (link.src == claim.id) {
            //we found a link that uses the given claim, save a ref to the arg id from the other end of the link
            returnArgIds.push(link.tgt); //type can only be USED_IN
        }
    });

    //2. use the ids we found to get the args
    var returnArgs = [];
    var args = getArgs();
    args.forEach(function(arg){
        //loop through the arg ids we found above
        returnArgIds.forEach(function(matchId){
            if (arg.id == matchId) {
                returnArgs.push(arg);
            }
        });
    });

    return returnArgs;
}


export default {
    getClaims:getClaims,
    getArgs:getArgs,
    getLinks:getLinks,
    getArgsUsingClaim: getArgsUsingClaim
}