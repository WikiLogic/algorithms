import DataProvider from '../data/graph1.js';

// a list of claim/argument ids that have been updated in this propagation - so we don't update them twice / repeatedly
var propagation_terminator = []; 

// Beginning with a claim, propagate state updates upwards in the graph
function propagate_from_a_claim(claim){
    console.group('propogation step');

        console.log('0. Propogate from claim: ', claim);
        propagation_terminator.push(claim);

        var argsAbove = DataProvider.getArgsUsingClaim(claim);
        console.log('1. Args that use that claim', argsAbove);

        //2. propogate from the first arg ("mark" it to simulate updating it, no need to actually update it as we're focusing on the proppogation here)

    console.groupEnd();
}


function next_claim_to_propagate(){

}

function next_argument_to_propagate(){

}

export default {
    propogateFromAClaim:propagate_from_a_claim
}