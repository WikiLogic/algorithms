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
            <div className="body__panel">
              <ProbabilityScene/>
            </div>
            <div className="body__panel">
              <GraphScene/>
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
