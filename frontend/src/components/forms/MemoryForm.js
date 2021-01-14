import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemoryForm = (props) => {
    return (
        <>
            <Form id="add-form" name="add-form">
                <FormGroup>
                    <Label for="title">Заглавие:</Label>
                    <Input type="text" id="title" placeholder="Заглавие" minlength="2" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Описание:</Label>
                    <Input type="textarea" id="description" rows="6" minlength="4" />
                </FormGroup>
                <Button id="submit-btn" type="button" color="primary">Добави</Button>
            </Form>
            <Form id="edit-form" name="edit-form" className="d-none">
                <FormGroup>
                    <Label for="edit-title">Заглавие:</Label>
                    <Input type="text" id="edit-title" placeholder="Заглавие" minlength="2" />
                </FormGroup>
                <FormGroup>
                    <Label for="edit-description">Описание:</Label>
                    <Input type="textarea" id="edit-description" rows="6" minlength="4" />
                </FormGroup>
                <Button id="edit-btn" type="button" color="primary">Добави</Button>
            </Form>
        </>
    );
}

export default MemoryForm;
