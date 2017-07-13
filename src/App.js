import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

import ProbabilityScene from './scenes/ProbabilityScene.jsx';
import GraphScene from './scenes/GraphScene.jsx';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          {/*
          <div className="nav">
            <Link to="/probability" className="nav__link">Probability</Link>
            <Link to="/graph" className="nav__link">Graph</Link>
          </div>
          */}
          <div className="body">
            <p>Algorithms for WL</p>
            <div className="body__panel">
              <ProbabilityScene/>
            </div>
            <div className="body__panel">
              <p><strong>Working out graph propogation</strong>, when a claim is updated probabilities need to propogate up the graph.</p>
              <GraphScene/>
            </div>
            <div className="body__panel">
              Thoughts on fast link access:<br /> 
              <ul>
                <li>In the graph scene here, <code>src -> tgt</code> points up.</li>
                <li>If we assume going down is the most frequent access, then for each node we need to find all related nodes below asap</li>
              </ul>
              Eg:
              <ol>
                <li>We start on the <code>(Claim:"Claim 1")</code> node</li>
                <li>We search links for any with <code>(tgt="Claim 1")</code></li>
                <li>We find the link <code>(src="Arg 1")-->(tgt="Claim 1")</code></li>
                <li>If links are ordered(/indexed?) by tgt, then the rest of the links we're looking for should be adjacent to that first link</li>
              </ol>
            </div>
            {/*
            <Route path="/probability" component={ProbabilityScene}/>
            <Route path="/graph" component={GraphScene}/>
            */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
