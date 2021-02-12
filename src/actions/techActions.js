import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call to /techs and store in res const
		const res = await fetch('/techs');
		// await res.json and store to data const
		const data = await res.json();

		// dispatch GET_TECHS type to logReducer with a payload data, which should be an array of techs objects
		dispatch({
			type: GET_TECHS,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Add tech to server
export const addTech = (tech) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call to /techs and store in res const
		const res = await fetch('/techs', {
			method: 'POST',
			body: JSON.stringify(tech),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// await res.json and store to data const
		const data = await res.json();

		// dispatch ADD_TECH type to logReducer with a payload data, which should be a new tech object
		dispatch({
			type: ADD_TECH,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Delete tech
export const deleteTech = (id) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call of DELETE to /logs
		await fetch(`/techs/${id}`, {
			method: 'DELETE',
		});

		// dispatch DELETE_TECH type to logReducer with a payload of id
		dispatch({
			type: DELETE_TECH,
			payload: id,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
