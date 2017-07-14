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

    return (
      <div className="arg-card" onClick={this.handleClick}>
        [{this.props.arg.probability}] {this.props.arg.text} [{this.props.arg.updated}]
      </div>
    );
  }
}

export default ArgCard;
