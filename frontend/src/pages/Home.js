import MemoryForm from '../components/forms/MemoryForm'
import Filters from '../components/filters/Filters'
import DarkLightToggle from '../components/buttons/DarkLightToggle'
import Memory from '../components/memory/Memory'

function Home(props) {
    return <>
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <MemoryForm />
            </div>
            <div className="col-xs-12 col-md-8">
                <Filters />
                <DarkLightToggle />
                <div className="card-list">
                    <Memory title="Заглавие" description="Описание" />
                </div>
            </div>
        </div>
    </>
}
export default Home;
