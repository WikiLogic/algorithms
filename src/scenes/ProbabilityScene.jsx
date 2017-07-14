import React, { Component } from 'react';
import Claim from '../components/Claim.jsx';
import probabilities from '../algorithms/probabilities.js';

class ProbabilityScene extends Component {

  constructor(props) {
    super(props);

    var claims = [
      {
        text: "Claim", probability: 0.5,
        args: [
          {
            title: "Argument", 
            id: "1", type: "SUPPORTS", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.5 }
            ]
          },
          {
            title: "Argument", 
            id: "2", type: "SUPPORTS", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.5 },
              { id: "n", text: "Premise", probability: 0.5 }
            ]
          },
          {
            title: "Argument", 
            id: "3", type: "OPPOSES", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.5 },
              { id: "n", text: "Premise", probability: 0.5 },
              { id: "n", text: "Premise", probability: 0.5 }
            ]
          }
        ]
      },
      {
        text: "Claim 1/2 - 0.5", probability: 0.5,
        args: [
          {
            title: "Argument", 
            id: "1", type: "SUPPORTS", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.1 }
            ]
          },
          {
            title: "Argument", 
            id: "2", type: "OPPOSES", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.1 }
            ]
          }
        ]
      },
      {
        text: "Claim 2/3 - 0.6", probability: 0.5,
        args: [
          {
            title: "Argument", 
            id: "1", type: "SUPPORTS", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.2 }
            ]
          },
          {
            title: "Argument", 
            id: "2", type: "OPPOSES", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.1 }
            ]
          }
        ]
      },
      {
        text: "Claim 1/3 - 0.3", probability: 0.5,
        args: [
          {
            title: "Argument", 
            id: "1", type: "SUPPORTS", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.1 }
            ]
          },
          {
            title: "Argument", 
            id: "2", type: "OPPOSES", probability: 0.5,
            premises: [
              { id: "n", text: "Premise", probability: 0.2 }
            ]
          }
        ]
      }

    ];

    //run the probability calculations
    claims.forEach(function(claim){
      //calculate all the args first
      claim.args.forEach(function(arg){
        arg.probability = probabilities.calculateArgProb(arg.premises);
      });
      //then use them to calculate the claim
      claim.probability = probabilities.calculateClaimProb(claim.args);
    });

    this.state = {
      claims: claims
    }
  }

  render() {
    var claims = [];
    
    this.state.claims.forEach(function(claim, i){
      claims.push(<Claim claim={claim} key={i}/>)
    });

    return (
      <div className="Arguments">
        <p>Working out the probability of args -> claim</p>
        {claims}
      </div>
    );
  }
}

export default ProbabilityScene;
