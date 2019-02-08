import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* post() {
	console.log('post');
	let po = yield axios.get('http://localhost:4500/posts');
	yield put({ type: 'SHOW_POST', value: po.data });
}

function* sendData(action) {
	console.log(action.data);
	let post = action.data;
	yield axios.post('http://localhost:4500/posts', {
		title: post.title,
		article: post.article,
		author: post.author
	});
	yield put({ type: 'POST' });
}

export function* rootSaga() {
	console.log('rootsaga');
	yield takeLatest('POST', post);
	yield takeLatest('SEND_DATA', sendData);
}
