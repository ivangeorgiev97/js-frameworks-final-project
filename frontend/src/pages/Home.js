import MemoryForm from '../components/forms/MemoryForm'
import Filters from '../components/filters/Filters'
import DarkLightToggle from '../components/buttons/DarkLightToggle'
import Memory from '../components/memory/Memory'
import { useSelector } from 'react-redux'
import { Alert } from 'reactstrap';

function Home (props) {

    const memories = useSelector(state => state.memories);

    const getMemories = () => {

        if (!memories || !memories.length) {
            return <div className="col">
                <Alert color="danger" className="text-center my-1 p-3">
                    No memories added
                </Alert>
            </div>
        }

        const memoriesList = memories.map(memory => {
            return <Memory
                    key={memory.id}
                    title={memory.title}
                    description={memory.description}
                    />
        })

        return memoriesList;
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
                    {getMemories()}
                </div>
            </div>
        </div>
    </>
}

export default Home;
