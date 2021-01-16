import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faMemory, faUser } from '@fortawesome/free-solid-svg-icons';

function About(props) {
    return <>
        <div className="row">
            <div class="col-12">
                <h4><FontAwesomeIcon icon={faMemory} className="mr-2"/> Memories App</h4>
                <hr className="hr" />
                <p><FontAwesomeIcon icon={faQuestion} className="mr-2"/> Предоставя възможност за създаване, преглеждане, изтриване и филтриране на бележки със спомени, със заглавие и описание на всеки спомен.</p>
                <p><FontAwesomeIcon icon={faUser} className="mr-2"/> Иван Георгиев - 2001737001, спецаилност "Софтуерни технологии със специализация мобилни системи и приложения"</p>
            </div>
        </div>
    </>
}
export default About;
