const initialState = {
	posts: [],
	comments: []
};

const reducer = (state = initialState, action) => {
	let nps;
	switch (action.type) {
		case 'GET_COMMENTS_ASYNC':
			console.log('comments', action);
			nps = { ...state, comments: action.payload };
			break;

		case 'GET_POST_ASYNC':
			console.log(action);
			nps = { ...state, posts: action.payload };
			break;

		default:
			nps = state;
	}
	return nps;
};

export default reducer;
