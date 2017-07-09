/**
 * Work out the probability of an argument using the probabilities of all it's claims
 * @param {array} premises
 */
function calculateArgProb(premises){
    if (premises.length === 0) { return 0; }

    //just multiply them all together?
    var prob = 1;
    premises.forEach(function(premis){
        prob = prob * premis.probability;
    });

    return prob;
}

/**
 * Work out the probability of a claim using all it's arguments
 * @param {array} args 
 */
function calculateClaimProb(args){
    if (args.length === 0) { return 0; }

    //take an average - invert the OPPOSES
    var prob = 0;
    args.forEach(function(arg){
        if (arg.type === "OPPOSES") {
            //opposing args get inverted. eg, if an opposition is .75 it contributes .25 to being right... this feels wrong
            prob += (1 - arg.probability);
        } else {
            prob += arg.probability;
        }
    });
    prob = prob/args.length;

    return prob;
}

export default {
    calculateArgProb:calculateArgProb,
    calculateClaimProb:calculateClaimProb
}