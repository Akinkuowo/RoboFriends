import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants' ;

const initialStateSearch = {
	searchField: ''
}


export const searchRobots = (state=initialStateSearch, action={}) =>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;
	}
}


const initialStateRobots ={
	pending: false,
	robots: [],
	failed: ''
}

export const requestRobots = (state=initialStateRobots, action={}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {pending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, pending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {failed: action.payload, pending: false})
		default:
			return state;
	}
}