const MemoryForm = (props) => {
    return (
        <div classNameName="col-xs-12 col-md-4">
            <form id="add-form" name="add-form">
                <div className="form-group">
                    <label for="title">Заглавие:</label>
                    <input type="text" className="form-control" id="title" placeholder="Заглавие" minlength="2" />
                </div>
                <div className="form-group">
                    <label for="description">Описание:</label>
                    <textarea className="form-control" id="description" rows="6" minlength="4"></textarea>
                </div>
                <button id="submit-btn" type="button" className="btn btn-primary">Добави</button>
            </form>
            <form id="edit-form" name="edit-form" className="d-none">
                <form id="addForm">
                    <div className="form-group">
                        <label for="edit-title">Заглавие:</label>
                        <input type="text" className="form-control" id="edit-title" name="edit-title" placeholder="Заглавие" minlength="2" />
                    </div>
                    <div className="form-group">
                        <label for="edit-description">Описание:</label>
                        <textarea className="form-control" id="edit-description" name="edit-description" rows="6" minlength="4"></textarea>
                    </div>
                    <button id="edit-btn" type="button" className="btn btn-success">Обнови</button>
                </form>
            </form>
        </div>
    );
}

export default MemoryForm;
