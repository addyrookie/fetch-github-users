import {
	FETCH_GITHUB_PROFILE,
	FETCH_GITHUB_PROFILE_SUCCESS,
	FETCH_GITHUB_PROFILE_FAILURE,
	POST_REPOSITORY_INFORMATION
} from '../constants/actionTypes';

export const initialState = {};

export const githubProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GITHUB_PROFILE:
			return Object.assign({}, state, {
				isRequesting: true
			})
		case FETCH_GITHUB_PROFILE_SUCCESS:
			return Object.assign({}, state, {
				isRequesting: false,
				allRepos: action.payload.data
			})
		case FETCH_GITHUB_PROFILE_FAILURE:
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.payload
			})
		case POST_REPOSITORY_INFORMATION: 
			return Object.assign({}, state, {
				repositoryInfo: action.payload.repositoryInfo
			})
		default:
			return state;
	}
};