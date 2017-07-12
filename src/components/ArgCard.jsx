import React, { Component } from 'react';

class ArgCard extends Component {

  render() {

    return (
      <div className="arg-card">
        [{this.props.arg.probability}] {this.props.arg.text}
      </div>
    );
  }
}

export default ArgCard;
