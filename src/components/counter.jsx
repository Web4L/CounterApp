import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				<span
					style={
						this.props.counter.value === 0
							? { color: "#000" }
							: { color: "#fff" }
					}
					className={this.getBadgeClasses()}
				>
					{this.formatCount()}
				</span>
				<button
					onClick={() => {
						this.props.handleIncrement(this.props.counter);
					}}
					style={{ color: "#fff" }}
					className="btn bg-secondary btn-sm m-1"
				>
					+
				</button>
				<button
					onClick={() => {
						this.props.handleDecrement(this.props.counter);
					}}
					style={{ color: "#fff" }}
					disabled={this.props.counter.value === 0}
					className="btn bg-secondary btn-sm m-1"
				>
					-
				</button>
				<button
					onClick={() => {
						this.props.handleDelete(this.props.counter.id);
					}}
					style={{ fontWeight: "bold" }}
					className="btn bg-danger btn-sm m-2"
				>
					{" "}
					Delete{" "}
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		return (
			"badge m-2 bg-" +
			(this.props.counter.value === 0 ? "warning" : "primary")
		);
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
