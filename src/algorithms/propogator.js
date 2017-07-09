// a list of claim/argument ids that have been updated in this propagation - so we don't update them twice / repeatedly
var propagation_terminator = []; 

// Beginning with a claim, propagate state updates upwards in the graph
function propagate_from_a_claim(claim){
    propagation_terminator.push(claim);

}

// Takes a claim ID and returns a list of argument tuples (argumentId, argumentState, [(premisState,)]) that use that claim
function get_arguments_using_claim(){

}

function next_claim_to_propagate(){

}

function next_argument_to_propagate(){

}

export default {
    propogateFromAClaim:propagate_from_a_claim
}