import React, { Component } from 'react';
import ClaimCard from '../components/ClaimCard.jsx';
import ArgCard from '../components/ArgCard.jsx';

class GraphScene extends Component {

  constructor(props) {
    super(props);



    this.state = {
      claim1: { text: 'Claim 1', probability: 0.5 },
      claim2: { text: 'Claim 2', probability: 0.5 },
      claim3: { text: 'Claim 3', probability: 0.5 },
      claim4: { text: 'Claim 4', probability: 0.5 },
      claim5: { text: 'Claim 5', probability: 0.5 },
      claim6: { text: 'Claim 6', probability: 0.5 },
      claim7: { text: 'Claim 7', probability: 0.5 },
      claimStart: { text: 'Claim Starter', probability: 0.5 },
      arg1: { text: 'Arg 1', probability: 0.5 },
      arg2: { text: 'Arg 2', probability: 0.5 },
      arg3: { text: 'Arg 3', probability: 0.5 },
      arg4: { text: 'Arg 4', probability: 0.5 },
      arg5: { text: 'Arg 5', probability: 0.5 },
      arg6: { text: 'Arg 6', probability: 0.5 },
      arg7: { text: 'Arg 7', probability: 0.5 },
      arg8: { text: 'Arg 8', probability: 0.5 },
      links: [
        { type: "OPPOSES", src: "Arg 1", tgt: "Claim 1" },
        { type: "OPPOSES", src: "Arg 3", tgt: "Claim 1" },
        { type: "SUPPORTS", src: "Arg 2", tgt: "Claim 2" },
        { type: "OPPOSES", src: "Arg 4", tgt: "Claim 2" },
        { type: "SUPPORTS", src: "Arg 5", tgt: "Claim 3" },
        { type: "OPPOSES", src: "Arg 6", tgt: "Claim 3" },
        { type: "OPPOSES", src: "Arg 6", tgt: "Claim 4" },
        { type: "SUPPORTS", src: "Arg 7", tgt: "Claim 4" },
        { type: "SUPPORTS", src: "Arg 7", tgt: "Claim 5" },
        { type: "OPPOSES", src: "Arg 8", tgt: "Claim 4" },
        { type: "OPPOSES", src: "Arg 8", tgt: "Claim 5" },
        { type: "USED_IN", src: "Claim 6", tgt: "Arg 5" },
        { type: "USED_IN", src: "Claim 6", tgt: "Arg 6" },
        { type: "USED_IN", src: "Claim Starter", tgt: "Arg 6" },
        { type: "USED_IN", src: "Claim Starter", tgt: "Arg 7" },
        { type: "USED_IN", src: "Claim 7", tgt: "Arg 7" },
        { type: "USED_IN", src: "Claim 7", tgt: "Arg 8" },
        { type: "USED_IN", src: "Claim 3", tgt: "Arg 1" },
        { type: "USED_IN", src: "Claim 3", tgt: "Arg 2" },
        { type: "USED_IN", src: "Claim 4", tgt: "Arg 2" },
        { type: "USED_IN", src: "Claim 4", tgt: "Arg 3" },
        { type: "USED_IN", src: "Claim 5", tgt: "Arg 3" },
        { type: "USED_IN", src: "Claim 5", tgt: "Arg 4" }
      ]
    }
  }

  componentDidMount(){
    //console.log("hi", this.refs.svg.offsetWidth() );
  }

  render() {

    return (
      <div className="graph-scene">
        <p>Working out graph propogation</p>
        <svg className="graph-scene__links-svg" viewBox="0 0 1000 100" ref="svg">
          {/* The idea is to get the position of the html nodes and map them to this svg */}
          <line x1="20" y1="100" x2="100" y2="20" stroke-width="1" stroke="black"/>
        </svg>
        <div className="graph-scene__row">
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim1}/>
          </div>
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim2}/>
          </div>
        </div>
        <div className="graph-scene__row">
        <div className="graph-scene__column">
          <ArgCard arg={this.state.arg1}/>
        </div>
        <div className="graph-scene__column">
          <ArgCard arg={this.state.arg2}/>
        </div>
        <div className="graph-scene__column">
          <ArgCard arg={this.state.arg3}/>
        </div>
        <div className="graph-scene__column">
          <ArgCard arg={this.state.arg4}/>
        </div>
        </div>
        <div className="graph-scene__row">
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim3}/>
          </div>
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim4}/>
          </div>
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim5}/>
          </div>
        </div>
        <div className="graph-scene__row">
          <div className="graph-scene__column">
            <ArgCard arg={this.state.arg5}/>
          </div>
          <div className="graph-scene__column">
            <ArgCard arg={this.state.arg6}/>
          </div>
          <div className="graph-scene__column">
            <ArgCard arg={this.state.arg7}/>
          </div>
          <div className="graph-scene__column">
            <ArgCard arg={this.state.arg8}/>
          </div>
        </div>
        <div className="graph-scene__row">
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim6}/>
          </div>
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claimStart}/>
          </div>
          <div className="graph-scene__column">
            <ClaimCard claim={this.state.claim7}/>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphScene;
