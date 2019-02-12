import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Posts from './Posts';
import Comment from './Comments';
import Form from './Form';

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			loaded: false
		};
	}

	jwt = async () => {
		const token = await localStorage.getItem('JWT');
		console.log('token...', token);
		const decoded = await jwt_decode(token);
		await this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			email: decoded.email,
			loaded: true
		});
	};
	componentDidMount() {
		this.jwt();
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron mt-5">
					<div className="col-sm-8 mx-auto">
						<h1 className="text-center">PROFILE</h1>
					</div>

					<table className="table col-md-6 mx-auto">
						<tbody>
							<tr>
								<td>First Name</td>
								<td>{this.state.first_name}</td>
							</tr>

							<tr>
								<td>Last Name</td>
								<td>{this.state.last_name}</td>
							</tr>

							<tr>
								<td>Email</td>
								<td>{this.state.email}</td>
							</tr>
						</tbody>
					</table>
					<Form />
					<Posts />
				</div>
			</div>
		);
	}
}

export default Profile;
