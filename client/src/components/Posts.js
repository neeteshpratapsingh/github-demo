import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Comment from './Comments';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			comment: ''
		};
	}

	handleDelete = async (e) => {
		e.preventDefault();

		await axios.delete('http://localhost:4500/posts/' + e.target.value);
		await this.props.getPost();
	};
	componentDidMount() {
		// axios.get('http://localhost:4500/posts').then((response) => {
		// 	const posts = response.data;
		// 	this.setState({ posts });
		// });
		this.props.getPost();
	}
	render() {
		return (
			<div className="container bg-success">
				<div className="row">
					<div className="col-md" />
					<div className="col-md m-1">
						<div className="jumbotron-div col s12">
							<ul className="collection">
								{this.props.posts.map((post) => (
									<li key={post._id} className="collection-item left-align red lighten-3 m-1">
										<div className="p-2 border border-primary">
											<h5>Title: {post.title}</h5>
											<button
												value={post._id}
												className="badge badge-primary badge-sm"
												onClick={this.handleDelete}
											>
												Delete
											</button>
											<div>
												<p>Content: {post.article}</p>
											</div>
											<div className="mb-2">
												<small>Author -{post.author}</small>
											</div>

											<div>
												<Comment postId={post._id} />
											</div>
										</div>
										<br />
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-md" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

const mapDispachToProps = (dispatch) => {
	return {
		// showPost: () => dispatch({ type: 'POST' }),
		getPost: () => dispatch({ type: 'GET_POST' })
	};
};
export default connect(mapStateToProps, mapDispachToProps)(Posts);
