import React, { Component } from 'react';

class ArgCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.clickHandler(this.props.arg);
  }

  render() {
    if (typeof this.props.arg === 'undefined') { return null; }

    if (this.props.arg.updated % 2 == 0) {
      var pulseClass = "pulse-0";
    } else {
      var pulseClass = "pulse-1"; 
    }

    return (
      <div className={`arg-card ${pulseClass}`} onClick={this.handleClick}>
        [{this.props.arg.probability}] {this.props.arg.text} [{this.props.arg.updated}]
      </div>
    );
  }
}

export default ArgCard;
