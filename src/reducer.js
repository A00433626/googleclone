import { red } from "@material-ui/core/colors";

export const initialState = {
	term: null,
};
export const actionTypes = {
	SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const reducer = (state, action) => {
	console.log(state, action);
	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return {
				...state,
				term: action.term,
			};
		default:
			return state;
	}
};
export default reducer;
