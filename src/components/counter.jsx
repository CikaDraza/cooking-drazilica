import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
	state = {
		count: 0
	};

	render() {
		return (
			<div className="items-cart">
				<span className={`num-items App ${this.counting()}`}>{this.state.count}</span>
				<img src="carte.png" alt="icon" />
			</div>
		);
	}

	counting() {
		let addClass = 'hidden';
		return this.state.count == 0 ? addClass : this.state.count;
	}
}

export default Counter;
