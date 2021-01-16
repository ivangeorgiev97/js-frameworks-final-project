import React from 'react' ;// , {useEffect} from 'react'; // , useCallback
import { FormGroup, Label, Input } from 'reactstrap';
/* TODO - IMPORT ACTIONS TOO */
import { /* useDispatch, */ useSelector } from 'react-redux';


const IdFilter = (props) => {
    const idFilter = useSelector(state => state.idFilter);

    // const dispatch = useDispatch();

/*     const loadMemories = useCallback(() => {
        dispatch(getMemories({
            idFilter: idFilter,
            sortBy: sortBy,
        }));
      }, [dispatch, idFilter, sortBy]); */
    

/*     useEffect(() => {
        loadMemories();
    }, [loadMemories]); */

    const changeIdFilter = (event) => {
        /* dispatch(setIdFilter(event.target.value)); */
    }
    return (
        <FormGroup>
            <Label for="select-id">ID филтриране</Label>
            <Input 
            onChange={changeIdFilter} 
            value={idFilter}
            type="select"
            className="custom-select" 
            name="select-id" 
            id="select-id"
            >
                <option value="1">Над id 1</option>
                <option value="2">Над id 2</option>
                <option value="15">Над id 15</option>
            </Input>
        </FormGroup>
    );
}

export default IdFilter;
