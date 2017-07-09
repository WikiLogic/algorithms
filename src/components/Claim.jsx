import React, { Component } from 'react';
import Arg from './Arg.jsx';

class ProbabilityScene extends Component {

  render() {
    var args = [];
    
    this.props.claim.args.forEach(function(arg, i){
      args.push(<Arg arg={arg} key={i}/>)
    });

    return (
      <div className="claim">
        [{this.props.claim.probability}] {this.props.claim.text}
        {args}
      </div>
    );
  }
}

export default ProbabilityScene;
