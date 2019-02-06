import axios from 'axios';

export const register = (newUser) => {
	return axios
		.post('http://localhost:4000/user/signup', {
			first_name: newUser.first_name,
			last_name: newUser.last_name,
			email: newUser.eamil,
			password: newUser.password
		})
		.then((res) => {
			console.log('Registered!');
		});
};

export const login = (user) => {
	console.log('user function login', user);
	return axios
		.post('http://localhost:4000/user/login', {
			email: user.email,
			password: user.password
		})
		.then((res) => {
			console.log('res', res);
			localStorage.setItem('usertoken', res.data.token);
			return res.token;
		})
		.catch((err) => {
			console.log(err);
		});
};
