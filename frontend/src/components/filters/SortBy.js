import React from 'react' ;// , {useEffect} from 'react'; // , useCallback
import { FormGroup, Label, Input } from 'reactstrap';
/* TODO - IMPORT ACTIONS TOO */
import { /* useDispatch, */ useSelector } from 'react-redux';


const SortBy = (props) => {
    // TODO - Separate components
/*     return (
        <div class="form-group">
            <label for="from-id">ID филтриране (без ajax заявка)</label>
            <select class="form-control custom-select" id="from-id">
                <option value="" selected disabled hidden>Моля изберете</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="15">15</option>
            </select>
        </div>
    ); */

    const sortBy = useSelector(state => state.sortBy);

    // const dispatch = useDispatch();

/*     const loadMemories = useCallback(() => {
        dispatch(getMemories({
            SortBy: SortBy,
            sortBy: sortBy,
        }));
      }, [dispatch, SortBy, sortBy]); */
    

/*     useEffect(() => {
        loadMemories();
    }, [loadMemories]); */

    const changeSortBy = (event) => {
        /* dispatch(setSortBy(event.target.value)); */
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
