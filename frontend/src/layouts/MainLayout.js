import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function MainLayout(props) {
    return <>
        <Navbar/>
        <div id="mainContainer" className="container p-5 bg-light">
            {props.children}
        </div>
        <Footer/>
    </>
}
export default MainLayout;
