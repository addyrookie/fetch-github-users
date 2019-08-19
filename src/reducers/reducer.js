import { combineReducers } from "redux";

import * as githubProfileReducer from "./githubProfileReducer";

export const rootReducer = combineReducers({
	githubProfile: githubProfileReducer.githubProfileReducer
});

export const initialState = {
	githubProfile: githubProfileReducer.initialState
};

