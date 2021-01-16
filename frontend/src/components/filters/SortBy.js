import React from 'react' ;
import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../store/actions';

const SortBy = (props) => {

    const sortBy = useSelector(state => state.sortBy);

    const dispatch = useDispatch();

    const changeSortBy = (event) => {
        dispatch(setSortBy(event.target.value));
    }
    return (
        <FormGroup>
            <Label for="select-sort-by">Сортирай по</Label>
            <Input 
            onChange={changeSortBy} 
            value={sortBy}
            type="select"
            className="custom-select" 
            name="select-sort-by" 
            id="select-sort-by"
            >
                <option value="title">Заглавие</option>
                <option value="date">Дата</option>
                <option value="id">Идентификатор</option>
            </Input>
        </FormGroup>
    );
}

export default SortBy;
