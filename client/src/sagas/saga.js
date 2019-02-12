import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';

function* getPost() {
	console.log('post');
	let po = yield axios.get('http://localhost:4500/posts');
	yield put({ type: 'GET_POST_ASYNC', payload: po.data });
}
function* sendDataAsync(action) {
	yield axios.post('http://localhost:4500/comments', action.data);
	yield put({ type: 'SEND_DATA_ASYNC' });
}

function* formDataAsync(action) {
	yield axios.post('http://localhost:4500/posts', action.data);
	yield put({ type: 'GET_POST' });
}

function* deleteDataAsync(action) {
	yield axios.delete('http://localhost:4500/posts/' + action.data);
	yield put({ type: 'DELETE_POST' });
}

function* userDataAsync(action) {
	fetch('http://localhost:4500/user/login', {
		method: 'POST',
		body: JSON.stringify({
			email: action.user.email,
			password: action.user.password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((resp) => resp.json())
		.then((resp) => {
			console.log('eredaf', resp.token);
			localStorage.setItem('JWT', resp.token);
		})
		.then((res) => {
			this.props.history.push('/profile');
		});
	const token = localStorage.getItem('JWT');
	if (token) {
		console.log('SIGNED IN');
	}
}

function* registerDataAsync(action) {
	console.log(action.data, 'register');
	fetch('http://localhost:4500/user/signup', {
		method: 'POST',
		body: JSON.stringify({
			first_name: action.data.first_name,
			last_name: action.data.last_name,
			email: action.data.email,
			password: action.data.password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((resp) => resp.json())
		.then((resp) => {
			this.props.history.push('/login');
		});
}

function* getComments() {
	const res = yield axios.get('http://localhost:4500/comments');
	const data = res.data;
	console.log(res);
	yield put({ type: 'GET_COMMENTS_ASYNC', payload: data });
}

export function* rootSaga() {
	console.log('rootsaga');
	yield all([
		yield takeLatest('GET_COMMENTS', getComments),
		yield takeLatest('GET_POST', getPost),
		yield takeLatest('SEND_DATA', sendDataAsync),
		yield takeLatest('FORM_DATA', formDataAsync),
		yield takeLatest('USER_DATA', userDataAsync),
		yield takeLatest('DELETE_DATA', deleteDataAsync),
		yield takeLatest('REGISTER_DATA', registerDataAsync)
	]);
}
