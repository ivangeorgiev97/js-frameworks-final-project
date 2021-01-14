import MemoryForm from '../components/forms/MemoryForm'
import Filters from '../components/filters/Filters'
import Memory from '../components/memory/Memory'

function Home(props) {
    return <>
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <MemoryForm />
            </div>
            <div className="col-xs-12 col-md-8">
                <Filters />
                <Memory title="Заглавие" description="Описание" />
            </div>
        </div>
    </>
}
export default Home;
