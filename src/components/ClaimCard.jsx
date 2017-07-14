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

    return (
      <div className="claim-card" onClick={this.handleClick}>
        [{this.props.claim.probability}] {this.props.claim.text} [{this.props.claim.updated}]
      </div>
    );
  }
}

export default ClaimCard;
