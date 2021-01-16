import SortBy from './SortBy';
import IdFilter from './IdFilter';
import {Button} from 'reactstrap';

const Filters = (props) => {
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
                    <Button color="primary">Филтрирай</Button>
                </div>
            </div>
        </>
    );
}

export default Filters;
