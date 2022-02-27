import './home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <h1>Organika</h1>
            <h4>The best online shop</h4>
            <Link className="btn btn-info btn-lg" to="/catalog">
                Go to the catalog!
            </Link>
        </div>
    );
};

export default Home;

