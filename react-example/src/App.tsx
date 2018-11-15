import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<{}, { clicks: number }> {
	constructor(props: {}) {
		super(props);
		this.state = {
			clicks: 0
		};
	}

	handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		this.setState((prev) => ({ clicks: prev.clicks + 1 }));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					{/* <button
						onClick={(e) => this.setState({ clicks: this.state.clicks + 1 })}
					>
						Click
					</button> */}
					<button onClick={(e) => this.handleClick(e)}>Click</button>
					{/* <button
						onClick={(e) =>
							this.setState((prev) => ({
								clicks: prev.clicks + 1
							}))
						}
					>
						Click
					</button> */}
					{this.state.clicks}
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
