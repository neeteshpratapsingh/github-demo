import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';

function* getPost() {
	console.log('post');
	let po = yield axios.get('http://localhost:4500/posts');
	yield put({ type: 'GET_POST_ASYNC', payload: po.data });
}
function* sendDataAsync(action) {
	yield axios.post('http://localhost:4500/comments', action.data);
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
		yield takeLatest('SEND_DATA', sendDataAsync)
	]);
}
