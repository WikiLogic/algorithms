import React, { Component } from 'react';

class ClaimCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.clickHandler(this.props.claim);
  }

  render() {
    if (typeof this.props.claim === 'undefined') { return null; }

    if (this.props.claim.updated % 2 == 0) {
      var pulseClass = "pulse-0";
    } else {
      var pulseClass = "pulse-1"; 
    }

    return (
      <div className={`claim-card ${pulseClass}`} onClick={this.handleClick}>
        [{this.props.claim.probability}] {this.props.claim.text} [{this.props.claim.updated}]
      </div>
    );
  }
}

export default ClaimCard;
