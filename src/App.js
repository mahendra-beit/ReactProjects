import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <div >
		This Div is Been click  times
	  </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<p className="App-intro">
         <h3 onClick = {this.props.onClick}>Mahendra Prajapati {this.props.clicks}</h3>
        </p>
      </div>
	  
    );
  }
}

export default App;
