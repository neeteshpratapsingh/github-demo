const initialState = {
	posts: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_POST':
			console.log(action.value);
			state = {
				posts: action.value
			};
			break;
		default:
	}
	return state;
};

export default reducer;
