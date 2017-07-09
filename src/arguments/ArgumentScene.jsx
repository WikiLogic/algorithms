import React, { Component } from 'react';
import WlArg from './WlArg.jsx';

class ArgumentScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      args: [
        {
          title: "A single claim", 
          id: "1", type: "SUPPORTS", probability: "0.5",
          premises: [
            { id: "n", text: "premis text", probability: "0.5" }
          ]
        },
        {
          title: "Two 0.5 claims", 
          id: "2", type: "SUPPORTS", probability: "0.5",
          premises: [
            { id: "n", text: "premis text", probability: "0.5" },
            { id: "n", text: "premis text", probability: "0.5" }
          ]
        },
        {
          title: "Three 0.5 claims", 
          id: "3", type: "SUPPORTS", probability: "0.5",
          premises: [
            { id: "n", text: "premis text", probability: "0.5" },
            { id: "n", text: "premis text", probability: "0.5" },
            { id: "n", text: "premis text", probability: "0.5" }
          ]
        }
      ]
    }
  }

  render() {
    var args = [];
    
    this.state.args.forEach(function(arg, i){
      args.push(<WlArg arg={arg} key={i}/>)
    });

    return (
      <div className="Arguments">
        {args}
      </div>
    );
  }
}

export default ArgumentScene;
