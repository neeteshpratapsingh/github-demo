import React, { Component } from 'react';
import { register } from './userFunction';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: ''
		};
		//this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	async onSubmit(e) {
		e.preventDefault();

		const user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		};
		console.log(user);
		await fetch('http://localhost:4000/user/signup', {
			//line 31-42 added
			method: 'POST',
			body: JSON.stringify({
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				password: user.password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((resp) => resp.json())
			.then((resp) => {
				this.props.history.push('/login');
			})
			.then((res) => {
				this.props.history.push('/login');
			});
	}

	// 	register(user).then((res) => {
	// 		this.props.history.push('/login');
	// 	});
	// }

	render() {
		return (
			<div className="container">
				<div classname="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal"> Please sign UP</h1>
							<div className="form-group">
								<label htmlFor="first_name">First Name</label>
								<input
									type="text"
									className="form control"
									name="first_name"
									placeholder="Enter First Name"
									value={this.state.first_name}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="last_name">Last Name</label>
								<input
									type="text"
									className="form control"
									name="last_name"
									placeholder="Enter Last Name"
									value={this.state.last_name}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email Address</label>
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
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
