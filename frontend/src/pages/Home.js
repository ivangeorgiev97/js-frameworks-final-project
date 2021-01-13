import Form from '../components/forms/MemoryForm'
import Filters from '../components/filters/Filters'

function Home(props) {
    return <>
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <Form />
            </div>
            <div className="col-xs-12 col-md-8">
                <Filters />
                Memories
            </div>
        </div>
    </>
}
export default Home;
