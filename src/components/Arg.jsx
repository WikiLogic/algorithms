import React, { Component } from 'react';
import Premise from './Premise.jsx';

class Arg extends Component {

  render() {

    var premises = [];
    
    this.props.arg.premises.forEach(function(premise, i){
      premises.push(<Premise premise={premise} key={i}/>)
    });

    return (
      <div className={`argument argument__${this.props.arg.type}`}>
        <div className="argument__title">
          [{this.props.arg.probability}] {this.props.arg.title} <small>{this.props.arg.type}</small>
        </div>
        <div className="argument__premises">
          {premises}
        </div>
      </div>
    );
  }
}

export default Arg;
