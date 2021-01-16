import actions from './action-types';
import {combineReducers} from 'redux';

function memories(state = [], action) {
    switch(action.type) {
        case actions.SET_MEMORIES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function sortBy(state = 'id', action) {
    switch(action.type) {
        case actions.SET_SORT_BY: {
            return action.payload
        }
        default: 
            return state;
    }
}

function idFilter(state = 1, action) {
    switch(action.type) {
        case actions.SET_ID_FILTER: {
            return action.payload
        }
        default: 
            return state;
    }
}

function darkMode(state = false, action) {
    switch(action.type) {
        case actions.SET_DARK_MODE: {
            return action.payload
        }
        default: 
            return state;
    }
}


export default combineReducers({memories, sortBy, idFilter, darkMode});
