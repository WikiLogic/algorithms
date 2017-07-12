import React, { Component } from 'react';

class ArgCard extends Component {

  render() {

    return (
      <div className={`arg-card arg-card__${this.props.arg.type}`}>
        [{this.props.arg.probability}] {this.props.arg.text}
      </div>
    );
  }
}

export default ArgCard;
