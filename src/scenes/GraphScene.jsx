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
      arg1: { text: 'Arg 1', probability: 0.5, type: 'OPPOSES' },
      arg2: { text: 'Arg 2', probability: 0.5, type: 'SUPPORTS' },
      arg3: { text: 'Arg 3', probability: 0.5, type: 'OPPOSES' },
      arg4: { text: 'Arg 4', probability: 0.5, type: 'SUPPORTS' },
      arg5: { text: 'Arg 5', probability: 0.5, type: 'SUPPORTS' },
      arg6: { text: 'Arg 6', probability: 0.5, type: 'OPPOSES' },
      arg7: { text: 'Arg 7', probability: 0.5, type: 'SUPPORTS' },
      arg8: { text: 'Arg 8', probability: 0.5, type: 'OPPOSES' }
    }
  }

  render() {
    

    return (
      <div className="graph-scene">
        <p>This area is for working out how to propogate updates through the graph</p>
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
