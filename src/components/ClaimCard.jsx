import React, { Component } from 'react';

class ClaimCard extends Component {

  render() {

    return (
      <div className="claim-card">
        [{this.props.claim.probability}] {this.props.claim.text}
      </div>
    );
  }
}

export default ClaimCard;
