import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemories } from '../../store/actions';
import SortBy from './SortBy';
import IdFilter from './IdFilter';
import {Button} from 'reactstrap';

const Filters = (props) => {

    const sortBy = useSelector(state => state.filtersAndSorting.sortBy);
    const idFilter = useSelector(state => state.filtersAndSorting.idFilter);

    const dispatch = useDispatch();
    
    const getSpecificMemories = () => {
        dispatch(getMemories({
            sortBy: sortBy,
            id: idFilter
        }));
    }

    useEffect(getSpecificMemories, [dispatch, idFilter, sortBy]);

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <SortBy />
                </div>
                <div className="col-6">
                    <IdFilter />
                </div>
            </div>
            <div className="row mb-1">
                <div className="col">
                    <Button color="primary" onClick={getSpecificMemories}>Филтрирай</Button>
                </div>
            </div>
        </>
    );
}

export default Filters;
