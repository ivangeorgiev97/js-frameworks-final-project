import {useSelector, useDispatch} from "react-redux";
import { setDarkMode } from '../../redux/actions';
import { Button } from 'reactstrap';


const DarkLightToggle = (props) => {
    const isDarkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!isDarkMode));
    }

    return (
        <Button id="dark-cards" type="button" color="warning" className="my-2" onClick={toggleDarkMode}>{ !isDarkMode ? 'Тъмни елементи' : 'Светли елементи' }</Button>
    );
}

export default DarkLightToggle;
