import React, { Component } from 'react';
import { login } from './userFunction';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password
		};
		fetch('http://localhost:4500/user/login', {
			method: 'POST',
			body: JSON.stringify({
				email: user.email,
				password: user.password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp);
				localStorage.setItem('JWT', resp.token);
			})
			.then((res) => {
				this.props.history.push('/profile');
			});
		const token = localStorage.getItem('JWT');
		if (token) {
			console.log('SIGNED IN');
		}

		// const res = axios.post('http://localhost:4500/user/signup', { email: user.email, password: user.password });
		// console.log(res);
	}

	// 	login(user).then((res) => {
	// 		if (res) {
	// 			console.log('redirecting');
	// 			this.props.history.push('/profile');
	// 		}
	// 	});
	// }

	render() {
		return (
			<div className="container">
				<div classname="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal"> Please sign in</h1>
							<div className="form-group">
								<label htmlFor="email">Email Address</label>
								<br />
								<input
									type="email"
									className="form control"
									name="email"
									placeholder="Enter Email"
									value={this.state.email}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<br />
								<input
									type="password"
									className="form control"
									name="password"
									placeholder="Enter Password"
									value={this.state.password}
									onChange={this.onChange}
								/>
							</div>
							<button type="submit" className="btn btn-lg btn-primary btn-block">
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
