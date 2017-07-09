import React, { Component } from 'react';

class WlPremise extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

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

export default WlPremise;
