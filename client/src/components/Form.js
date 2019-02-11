import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { connect } from 'react-redux';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			article: '',
			author: ''
		};
	}
	handleClick = () => {
		console.log('calling from form');
		this.props.getPost();
		axios
			.post('http://localhost:4500/posts', {
				title: this.state.title,
				article: this.state.article,
				author: this.state.author
			})
			.then((response) => {
				console.log('calling from form');
				this.props.getPost();
			})
			.catch((error) => {
				console.log(error);
			});
		console.log('calling from form');
		this.props.getPost();
		// this.redirectToTarget();
	};
	// redirectToTarget = () => {
	// 	this.props.history.push(`/p`);
	// 	window.location.reload();
	// };

	handleTitle = (e) =>
		this.setState({
			title: e.target.value
		});
	handleArticle = (e) =>
		this.setState({
			article: e.target.value
		});
	handleName = (e) =>
		this.setState({
			author: e.target.value
		});

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg" />
					<div className="col-lg m-5 p-5">
						<div class="p-3 mb-2 bg-primary text-white">Write post here</div>
						<div className="form-group shadow-textarea">
							<input
								type="text"
								onChange={this.handleName}
								className="form-control m-1"
								placeholder="Name"
								value={this.state.name}
							/>
							<input
								type="text"
								onChange={this.handleTitle}
								className="form-control m-1"
								placeholder="Title..."
								value={this.state.title}
							/>
							<textarea
								onChange={this.handleArticle}
								className="form-control z-depth-1 m-1"
								rows="3"
								placeholder="Write something here..."
								value={this.state.article}
							/>
						</div>
						<button className="btn btn-primary btn-md" onClick={this.handleClick}>
							Test
						</button>
					</div>
					<div className="col-lg" />
				</div>
			</div>
		);
	}
}

const mapDispachToProps = (dispatch) => {
	return {
		// showPost: () => dispatch({ type: 'POST' }),
		getPost: () => dispatch({ type: 'GET_POST' })
	};
};
export default connect(null, mapDispachToProps)(Form);
