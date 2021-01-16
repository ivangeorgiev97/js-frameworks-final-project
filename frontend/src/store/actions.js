import actions from './action-types';
import apiService from '../services/api-service';

export function setMemories(memories){
    return {type: actions.SET_MEMORIES, payload: memories};
}

export function setNewMemory(memory){
    return {type: actions.ADD_MEMORY, payload: memory};
}

export const getMemories = params => async dispatch => {
    try {
        const response = await apiService.get(
            'getAll',
            params
        )
        dispatch(setMemories(response));
    } catch (error) {
        console.log(error)
    }
}

export const addMemory = params => async dispatch => {
    try {
        const response = await apiService.post(
            'create',
            params
        )
        dispatch(setNewMemory(response));
    } catch (error) {
        console.log(error)
    }
}

export function removeMemory(memory){
    return {type: actions.REMOVE_MEMORY, payload: memory};
}

export const deleteMemory = params => async dispatch => {
    try {
        const response = await apiService.delete(
            `delete/${params.id}`,
            params
        )
        if(response) dispatch(removeMemory(params.id));
    } catch(error) {
        console.log(error)
    }
}

export function setSortBy(sortBy){
    return {type: actions.SET_SORT_BY, payload: sortBy};
}

export function setIdFilter(idFilter){
    return {type: actions.SET_ID_FILTER, payload: idFilter};
}

export function setDarkMode(value){
    return {type: actions.SET_DARK_MODE, payload: value};
}
