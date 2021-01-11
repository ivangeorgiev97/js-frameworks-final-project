import actions from './action-types';
import apiService from '../services/api-service';

export function setMemories(memories){
    return {type: actions.SET_MEMORIES, payload: memories};
}

export const getMovies = params => async dispatch => {
    try {
        const response = await apiService.get(
            'getAll',
            params,
        )
        dispatch(setMemories(response.results));
    } catch (error) {
        console.log(error)
    }
}

export function setSortBy(sortBy){
    return {type: actions.SET_SORT_BY, payload: sortBy};
}

export function setIdFilter(idFilter){
    return {type: actions.SET_ID_FILTER, payload: idFilter};
}
