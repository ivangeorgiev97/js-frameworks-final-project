import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function MainLayout(props) {
    return <>
        <Navbar/>
        <div className="container my-5">
            {props.children}
        </div>
        <Footer/>
    </>
}
export default MainLayout;
