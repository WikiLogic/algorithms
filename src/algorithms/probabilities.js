/*
 
===================================
 =  BEFORE YOU START READING CODE! =
 ===================================

Look at export default { } at the bottom of this file to see which functions are actually being used.

Note on contributing - if you're going to try out a new approach to calculating args or claims,
create a new function for your new approach, eg function newApproach(node){} and leave the others intact for posterity :)
At the bottom of this file, replace the relevant export with your new approach, eg:

export default {
    calculateArgProb:multiplyPremises,
    calculateClaimProb:newApproach     <-- look here!
}

*/

/**
 * Works out the probability of an argument
 * @param {array} premises - all the premises that make up the argument in question
 */
function multiplyPremises(premises){
    if (premises.length === 0) { return 0; } //if there are no premises - 0

    //just multiply them all together?
    var prob = 1;
    premises.forEach(function(premis){
        prob = prob * premis.probability;
    });

    return prob;
}

/**
 * Works out the probability of a claim                 (DON'T THINK THIS ONE WORKS)
 * Opposing args are inverted (eg, if an opposition arg is .75, 1-thisArg == .25)
 * An average is then taken of all the args 
 * @param {array} args - all the args that support / oppose the claim in question
 */
function invertOppositionAndAverage(args){
    if (args.length === 0) { return 0; }
    var prob = 0; //just an init value

    //add all the arg probabilities together
    args.forEach(function(arg){
        if (arg.type === "OPPOSES") {
            //invert opposition
            prob += (1 - arg.probability);
        } else {
            prob += arg.probability;
        }
    });
    //get an average!
    prob = prob/args.length;

    return prob;
}

/**
 * Works out the probability of a claim
 * Gets an average of all the opposition / support separately <---- this feels like a weak spot, large amounts of spam will draw it down. So - add a streangth number?
 * Do the baysean thing (I think)
 * Return the ratio
 * @param {array} args - all the args that support / oppose the claim in question
 */
function getTheRatioBetweenOpposesAndSupports(args){
    if (args.length === 0) { return 0; }
    var supportProb = 0; var supportCount = 0;
    var opposeProb = 0; var opposeCount = 0;
    
    args.forEach(function(arg){
        if (arg.type === "OPPOSES") {
            //invert opposition
            opposeProb += arg.probability;
            opposeCount++;
        } else {
            supportProb += arg.probability;
            supportCount++;
        }
    });

    //get an average for each type
    opposeProb = opposeProb / opposeCount;
    supportProb = supportProb / supportCount;

    /* eg - support: 0.2, oppose: 0.1        <-- the average values from just above
                    /   \          \
                0.1     0.1        0.1

                      2 (in support)         <-- the supportProb
                     over
                      3 (total posabilities) <-- var divider = supportProb + opposeProb

                      0.666...
    */

    var divider = supportProb + opposeProb;
    var result = supportProb / divider;

    return result;
}



export default {
    calculateArgProb:multiplyPremises,
    calculateClaimProb:getTheRatioBetweenOpposesAndSupports
}