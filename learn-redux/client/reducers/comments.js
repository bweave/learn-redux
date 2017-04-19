// a reducer takes 2 things:
// 1. a copy of current state
// 2. the action

function postcomments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment,
			}]
		case 'REMOVE_COMMENT':
			return [
				...state.slice(0, action.i), // from the start to the one to remove
				...state.slice(action.i + 1), // after the one to delete to the end
			]
		default:
			return state
	}

	return state
}

export default function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			...state, // current state
			[action.postId]: postcomments(state[action.postId], action), // overwrite this post with a new one
		}
	}
	return state
}

