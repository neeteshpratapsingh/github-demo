import React, { Component } from 'react';
import { connect } from 'react-redux';

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

	onSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.userData(user);
		this.props.history.push('/profile');
	};

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

const mapDispachToProps = (dispatch) => {
	return {
		userData: (user) => dispatch({ type: 'USER_DATA', user })
	};
};
export default connect(null, mapDispachToProps)(Login);
