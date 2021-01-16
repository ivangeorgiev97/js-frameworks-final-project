import { useSelector } from 'react-redux';
import {Button} from 'reactstrap';

const Memory = (props) => {
    const description = props.description;

    const isDarkMode = useSelector(state => state.darkMode);

    return (
        <>
            <div className={`card ${isDarkMode ? 'bg-dark text-white' : ''}`}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {description &&
                    <p className="card-text">{props.description}</p>
                    }
                    <Button color="danger" onClick={() => props.onRemoveMemory(props.id)}>Изтрий</Button>
                </div>
            </div>
        </>
    );
}

export default Memory;
