import React, { Component } from 'react';

class Premise extends Component {

  render() {

    return (
      <div className="premise">
        <div className="premise__text">
          [{this.props.premise.probability}] {this.props.premise.text}
        </div>
      </div>
    );
  }
}

export default Premise;
