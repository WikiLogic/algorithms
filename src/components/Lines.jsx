import React, { Component } from 'react';

class Lines extends Component {

  render() {
    var lines = [];
    this.props.lines.forEach(function(link, i){
      lines.push(<line x1={link.x1} y1={link.y1} x2={link.x2} y2={link.y2} key={i} className={'graph-scene__links-line graph-scene__links-line--' + link.type}/>);
    });

    return (
      <svg className="graph-scene__links-svg" viewBox={`0 0 ${this.props.svgBound.width} ${this.props.svgBound.height}`} ref="svg">
        {lines}
      </svg>
    );
  }
}

export default Lines;
