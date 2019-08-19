import {
	FETCH_GITHUB_PROFILE,
	FETCH_GITHUB_PROFILE_SUCCESS,
	FETCH_GITHUB_PROFILE_FAILURE
} from '../constants/actionTypes';

function requestGithubProfile() {
	return {
		type: FETCH_GITHUB_PROFILE
	};
}

function requestGithubProfileSuccess(data) {
	return {
		type: FETCH_GITHUB_PROFILE_SUCCESS,
		payload: {
			data
		}
	};
}

function requestGithubProfileFailure(error) {
	return {
		type: FETCH_GITHUB_PROFILE_FAILURE,
		payload: {
			error
		}
	};
}

function fetchGithubProfile() {
	return (
		(dispatch) => {
			dispatch(requestGithubProfile());
			return (
				fetch('https://api.github.com/users/andrew/repos')
				)
				.then((response) => response.json())
				.then((response) => {
					dispatch(requestGithubProfileSuccess(response));
				})
				.catch((error) => {
					dispatch(requestGithubProfileFailure(error));
				});
		});
}

export {
	fetchGithubProfile
};