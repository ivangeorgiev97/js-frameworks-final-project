import React from 'react' ;
import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setIdFilter } from '../../store/actions';


const IdFilter = (props) => {
    const idFilter = useSelector(state => state.idFilter);

    const dispatch = useDispatch();

    const changeIdFilter = (event) => {
        dispatch(setIdFilter(event.target.value));
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
                <option value="100">Над id 100</option>
            </Input>
        </FormGroup>
    );
}

export default IdFilter;
