import React, { Component } from 'react';
import Premise from './Premise.jsx';

class Arg extends Component {

  render() {

    var premises = [];
    
    this.props.arg.premises.forEach(function(premise, i){
      premises.push(<Premise premise={premise} key={i}/>)
    });

    return (
      <div className="argument">
        <div className="argument__title">
          [{this.props.arg.probability}] {this.props.arg.title}
        </div>
        <div className="argument__premises">
          {premises}
        </div>
      </div>
    );
  }
}

export default Arg;
