import React, { Component } from 'react';

class ClaimCard extends Component {

  render() {
    if (typeof this.props.claim == 'undefined') { return null; }

    return (
      <div className="claim-card">
        [{this.props.claim.probability}] {this.props.claim.text}
      </div>
    );
  }
}

export default ClaimCard;
