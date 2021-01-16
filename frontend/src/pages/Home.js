import MemoryForm from '../components/forms/MemoryForm';
import Filters from '../components/filters/Filters';
import DarkLightToggle from '../components/buttons/DarkLightToggle';
import Memory from '../components/memory/Memory';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMemory, getMemories } from '../store/actions';
import { Alert } from 'reactstrap';

function Home (props) {
    const memories = useSelector(state => state.memories);

    const getMemoriesList = () => {
        if (!memories || !memories.length) {
            return <div className="col">
                <Alert color="danger" className="text-center my-1 p-3">
                    Memories were not found
                </Alert>
            </div>
        }

        const memoriesList = memories.map(memory => {
            return <Memory
                    key={memory.id}
                    id={memory.id}
                    title={memory.title}
                    description={memory.description}
                    onRemoveMemory={onRemoveMemory}
                    />
        })

        return memoriesList;
    }

    const sortBy = useSelector(state => state.filtersAndSorting.sortBy);
    const idFilter = useSelector(state => state.filtersAndSorting.idFilter);

    const dispatch = useDispatch();

    const onRemoveMemory = (id) => {
        dispatch(deleteMemory({
            id: id
        }))
        dispatch(getMemories({
            sortBy: sortBy,
            id: idFilter
        }));
    }

    return <>
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <MemoryForm />
            </div>
            <div className="col-xs-12 col-md-8">
                <Filters />
                <DarkLightToggle />
                <div className="card-list">
                    {getMemoriesList()}
                </div>
            </div>
        </div>
    </>
}

export default Home;
