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
          <div>
            <Link to="/probability">Probability</Link>
            <Link to="/graph">Graph</Link>
          </div>
          <Route path="/probability" component={ProbabilityScene}/>
          <Route path="/graph" component={GraphScene}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
