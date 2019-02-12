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
	handleClick = async (e) => {
		const data = {
			title: this.state.title,
			article: this.state.article,
			author: this.state.author
		};
		this.props.formData(data);
		this.props.getPost();
	};

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
		formData: (data) => dispatch({ type: 'FORM_DATA', data }),
		getPost: () => dispatch({ type: 'GET_POST' })
	};
};
export default connect(null, mapDispachToProps)(Form);
