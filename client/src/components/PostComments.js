import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			comment: ''
		};
	}

	handleDelete = (e) => {
		window.location.reload();

		axios.delete('http://localhost:4500/posts/' + e.target.value);
	};
	componentDidMount = () => {
		axios.get('http://localhost:4500/posts').then((response) => {
			const posts = response.data;
			this.setState({ posts });
		});
	};
	render() {
		return (
			<div className="container bg-success">
				<div className="row">
					<div className="col-md" />
					<div className="col-md m-1">
						<div className="jumbotron-div col s12">
							<ul className="collection">
								{this.state.posts.map((post) => (
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
class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
			postId: this.props.postId,
			comments: []
		};
	}

	handleComment = (e) => {
		this.setState({ comment: e.target.value });
	};
	handleClick = (e) => {
		axios
			.post('http://localhost:4500/comments', {
				postId: e.target.value,
				body: this.state.comment
			})
			.then((response) => {
				console.log(response.data);
			});
		window.location.reload();
	};
	componentDidMount = () => {
		console.log(this.props);
		axios.get('http://localhost:4500/comments?postId=' + this.props.postId).then((response) => {
			const comments = response.data;
			this.setState({ comments });
		});
	};
	render() {
		return (
			<div>
				<ul className="collection">
					{this.state.comments.map((comment) => (
						<li key={comment._id} className="collection-item left-align red lighten-3 m-1">
							<div className="p-2 border border-primary">
								<p>{comment.body}</p>
							</div>
						</li>
					))}
				</ul>
				<div>
					<textarea
						onChange={this.handleComment}
						rows="1"
						placeholder="Comment..."
						value={this.state.comment}
					/>
					<button
						value={this.state.postId}
						className="badge badge-primary badge-sm"
						onClick={this.handleClick}
					>
						Comment
					</button>
				</div>
			</div>
		);
	}
}

export default Posts;
