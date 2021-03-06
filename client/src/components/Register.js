import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = async (e) => {
		e.preventDefault();
		const data = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		};
		this.props.registerData(data);
		this.props.history.push('/login');
	};

	render() {
		return (
			<div className="container">
				<div classname="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal"> Please sign UP</h1>
							<div className="form-group">
								<label htmlFor="first_name">First Name</label>
								<br />
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
								<br />
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
								<label htmlFor="email">Email Address</label> <br />
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
								Register
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
		registerData: (data) => dispatch({ type: 'REGISTER_DATA', data })
	};
};
export default connect(null, mapDispachToProps)(Register);
