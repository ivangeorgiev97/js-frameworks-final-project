import SortBy from './SortBy';
import IdFilter from './IdFilter';

const Filters = (props) => {
    return (
        <div className="row">
            <div className="col-6">
                <SortBy />
            </div>
            <div className="col-6">
                <IdFilter />
            </div>
        </div>
    );
}

export default Filters;
