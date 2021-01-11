/* import SortBy from './SortBy';
import IdFilter from './IdFilter'; */

const Filters = (props) => {
    // TODO - Separate components
    return (
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="sort-by">Сортирай по (с ajax заявка)</label>
                    <select class="form-control custom-select" id="sort-by">
                        <option value="" selected disabled hidden>Моля изберете</option>
                        <option value="title">Заглавие</option>
                        <option value="date">Дата</option>
                        <option value="id">Идентификатор</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label for="from-id">ID филтриране (без ajax заявка)</label>
                    <select class="form-control custom-select" id="from-id">
                        <option value="" selected disabled hidden>Моля изберете</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filters;
