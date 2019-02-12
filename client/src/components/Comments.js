import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

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
	handleClick = async (e) => {
		const data = {
			postId: this.props.postId,
			body: this.state.comment
		};
		this.props.sendData(data);
		this.props.getComments();
	};
	componentDidMount() {
		console.log('cdm cooments');
		this.props.getComments();
	}
	render() {
		return (
			<div>
				<ul className="collection">
					{this.props.comments.map((comment) => (
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

const mapStateToProps = (nps) => {
	console.log(nps);
	return {
		comments: nps.comments
	};
};

const mapDispachToProps = (dispatch) => {
	return {
		getComments: () => dispatch({ type: 'GET_COMMENTS' }),
		addComments: (data) => dispatch({ type: 'ADD_COMMENT', data }),
		sendData: (data) => dispatch({ type: 'SEND_DATA', data })
	};
};
export default connect(mapStateToProps, mapDispachToProps)(Comment);
