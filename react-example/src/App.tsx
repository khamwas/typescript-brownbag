import React, { Component, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component<{}, { clicks: number; input: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clicks: 0,
      input: ""
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ input: e.target.value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{this.state.clicks}</h1>
          <button
            onClick={() => this.setState(prev => ({ clicks: prev.clicks + 1 }))}
          >
            Click me.
          </button>
          <input onChange={this.handleChange} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
