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

export default combineReducers({memories});
