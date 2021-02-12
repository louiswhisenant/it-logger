import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from './types';

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data,
//         });
//     };
// };

// The following is the same as the above commented-out function, but simplifies the async dispatch call and includes error handling in a try/catch block

// Get logs
export const getLogs = () => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call to /logs and store in res const
		const res = await fetch('/logs');
		// await res.json and store to data const
		const data = await res.json();

		// dispatch GET_LOGS type to logReducer with a payload data, which should be an array of logs objects
		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Add new log
export const addLog = (log) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call of POST to /logs and store in res const
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// await res.json and store to data const
		const data = await res.json();

		// dispatch ADD_LOG type to logReducer with a payload of data
		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Delete log
export const deleteLog = (id) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call of DELETE to /logs
		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		// dispatch DELETE_LOG type to logReducer with a payload of id
		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Update log
export const updateLog = (log) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call of POST to /logs and store in res const
		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// await res.json and store to data const
		const data = await res.json();

		// dispatch UPDATE_LOG type to logReducer with a payload of log.id
		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Search logs
export const searchLogs = (text) => async (dispatch) => {
	try {
		// call setLoading to trun loading to true while function executes
		setLoading();

		// await fetch call to /logs and store in res const
		const res = await fetch(`/logs?q=${text}`);
		// await res.json and store to data const
		const data = await res.json();

		// dispatch SEARCH_LOGS type to logReducer with a payload data, which should be an array of logs objects
		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		// If something fails, dispatch LOGS_ERROR type to logReducer with a payload of err.response.data to pass along err message
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set current log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
