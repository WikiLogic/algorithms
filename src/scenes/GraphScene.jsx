import React, { Component } from 'react';
import ClaimCard from '../components/ClaimCard.jsx';
import ArgCard from '../components/ArgCard.jsx';
import Lines from '../components/Lines.jsx';
import DataProvider from '../data/graph1.js';
import Propogator from '../algorithms/propogator.js';

class GraphScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      claims: DataProvider.getClaims(),
      args: DataProvider.getArgs(),
      links: DataProvider.getLinks(),
      lines: [],
      svgBound: {
        width: 0, height: 0
      }
    }

    this.getNodeCoords = this.getNodeCoords.bind(this);
    this.stepPropogate = this.stepPropogate.bind(this);
    this.lines = []; //this will hold an array of lines to be rendered by Lines
  }

  //returns the coords for the middle of the node
  getNodeCoords(node){
    var bound = node.getBoundingClientRect();
    return {
      x:bound.left + bound.width/2,
      y:bound.top + bound.height/2
    }
  }

  //once the nodes have been rendered - build the links
  componentDidMount(){
    var svgBound = this.refs.svgwrap.getBoundingClientRect();
    var lines = [];
    //for each link
    for (let i = 0; i < this.state.links.length; i++) {

      //get the coords (but these are global)
      var srcCoords = this.getNodeCoords(this.refs[this.state.links[i].src]);
      var tgtCoords = this.getNodeCoords(this.refs[this.state.links[i].tgt]);

      //translate them to match the SVG space
      srcCoords.x -= svgBound.left;
      srcCoords.y -= svgBound.top;
      tgtCoords.x -= svgBound.left;
      tgtCoords.y -= svgBound.top;

      //apply them to the line!
      var line = {
        x1: srcCoords.x,
        y1: srcCoords.y,
        x2: tgtCoords.x,
        y2: tgtCoords.y,
        type: this.state.links[i].type
      };
      lines.push(line);
    }

    this.setState({
      lines: lines,
      svgBound: {
        width: svgBound.width,
        height: svgBound.height
      }
    });
  }

  stepPropogate(){
    console.log('step propogation');
    Propogator.propogateFromAClaim(this.state.claims[0]);
  }

  render() {

    return (
      <div className="graph-scene">

        <div className="graph-scene__links-svg-wrap" ref="svgwrap">
          <Lines lines={this.state.lines} svgBound={this.state.svgBound}/>
        </div>

        <div className="graph-scene__nodes-wrap">

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <div ref="claim1">
                <ClaimCard claim={this.state.claims[1]} />
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="claim2">
                <ClaimCard claim={this.state.claims[2]}/>
              </div>
            </div>
          </div>

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <div ref="arg1">
                <ArgCard arg={this.state.args[0]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg2">
                <ArgCard arg={this.state.args[1]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg3">
                <ArgCard arg={this.state.args[2]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg4">
                <ArgCard arg={this.state.args[3]}/>
              </div>
            </div>
          </div>

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <div ref="claim3">
                <ClaimCard claim={this.state.claims[3]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="claim4">
                <ClaimCard claim={this.state.claims[4]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="claim5">
                <ClaimCard claim={this.state.claims[5]}/>
              </div>
            </div>
          </div>

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <div ref="arg5">
                <ArgCard arg={this.state.args[4]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg6">
                <ArgCard arg={this.state.args[5]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg7">
                <ArgCard arg={this.state.args[6]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="arg8">
                <ArgCard arg={this.state.args[7]}/>
              </div>
            </div>
          </div>

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <div ref="claim6">
                <ClaimCard claim={this.state.claims[6]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="claimStarter">
                <ClaimCard claim={this.state.claims[0]}/>
              </div>
            </div>
            <div className="graph-scene__column">
              <div ref="claim7">
                <ClaimCard claim={this.state.claims[7]}/>
              </div>
            </div>
          </div>

          <div className="graph-scene__row">
            <div className="graph-scene__column">
              <button onClick={this.stepPropogate} type="button">Propogate</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default GraphScene;
