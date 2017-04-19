// a reducer takes 2 things:
// 1. a copy of current state
// 2. the action

export default function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index
			const updatedLikes = state[i].likes + 1
			const updatedPost = { ...state[i], likes: updatedLikes }

			return [
				...state.slice(0, i), // everything before the one we want
				updatedPost,
				...state.slice(i+1), // everything after the one we want
			]
		default:
			return state
	}
}
