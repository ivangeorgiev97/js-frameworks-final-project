import actions from './action-types';
import {combineReducers} from 'redux';

function memories(state = [], action) {
    switch(action.type) {
        case actions.SET_MEMORIES: {
            return [...action.payload]
        }
        case actions.ADD_MEMORY: {
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description,
                    created_at: action.payload.created_at
                }
            ]
        }
        case actions.REMOVE_MEMORY: {
            return [
                ...state.filter((memory) => memory.id !== action.payload)
            ]
        }
        default: 
            return state;
    }
}

function filtersAndSorting(state = {
    sortBy: 'id',
    idFilter: 1,
}, action) {
    switch(action.type) {
        case actions.SET_SORT_BY: {
            return {
                ...state, 
                ...{
                    sortBy: action.payload,
                }
            }
        }
        case actions.SET_ID_FILTER: {
            return {
                ...state,
                ...{
                    idFilter: action.payload
                }
            }
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

export default combineReducers({memories, filtersAndSorting, darkMode});
