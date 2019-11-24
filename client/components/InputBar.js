'use strict';
import React from 'react';
import "../css/universal.css";

class InputBar extends React.Component {
	/**
	 * props = {
	 * 	hint,
	 * 	onInputChange,
	 * 	info
	 * }
	 */
	constructor(props) {
		super(props);
		this.state = {
			showInfo: false,
		};
		this.showInfo = this.showInfo.bind(this);
	}

	//toggle instruction for input
	showInfo() {
		this.setState({
			showInfo: !this.state.showInfo
		});
	}

	//handle input
	handleChange(e) {
		if (!this.props.onInputChange) {
			return;
		}
		this.props.onInputChange(e.target.value);
	}

	render() {
		return (
			<div className="Search-block">
				<input
					type="text"
					className="p1"
					placeholder={this.props.hint}
					onChange={this.handleChange}
				/>
				<span onClick={this.showInfo}>
					<img src="/icons8-question-mark-30.png" alt="?" />
				</span>
				{this.state.showInfo ? (
					<p>{this.props.info}</p>
				) : null}
			</div>
		);
	}
}

export default InputBar;