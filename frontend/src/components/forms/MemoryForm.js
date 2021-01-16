import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMemory, getMemories } from '../../store/actions';

const MemoryForm = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const sortBy = useSelector(state => state.filtersAndSorting.sortBy);
    const idFilter = useSelector(state => state.filtersAndSorting.idFilter);

    const dispatch = useDispatch();

    const addNewMemory = () => {
        dispatch(addMemory({
            title: title,
            description: description
        }));
        dispatch(getMemories({
            sortBy: sortBy,
            id: idFilter
        }));
    }

    return (
        <>
            <Form id="add-form" name="add-form">
                <FormGroup>
                    <Label for="title">Заглавие:</Label>
                    <Input type="text" id="title" placeholder="Заглавие" required minLength="2" onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Описание:</Label>
                    <Input type="textarea" id="description" rows="6" onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <Button id="submit-btn" type="button" color="primary" onClick={addNewMemory}>Добави</Button>
            </Form>
        </>
    );
}

export default MemoryForm;
