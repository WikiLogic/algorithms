import React, { Component } from 'react';
import WlPremise from './WlPremise.jsx';

class WlArg extends Component {

  constructor(props) {
    super(props);

    this.state = {
      calculated_probability: this.calculateProbability(props.arg.premises)
    }

    this.calculateProbability = this.calculateProbability.bind(this);
  }

  calculateProbability(premises){
    if (premises.length === 0) { 
      return 0;
    }

    //just multiply them all together?
    var prob = 1;
    premises.forEach(function(premis){
      prob = prob * premis.probability;
    });

    return prob;
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      calculated_probability: this.calculateProbability(nextProps.arg.premises)
    });
  }

  render() {

    var premises = [];
    
    this.props.arg.premises.forEach(function(premise, i){
      premises.push(<WlPremise premise={premise} key={i}/>)
    });

    return (
      <div className="argument">
        <div className="argument__title">
          [{this.state.calculated_probability}] {this.props.arg.title}
        </div>
        <div className="argument__premises">
          {premises}
        </div>
      </div>
    );
  }
}

export default WlArg;
