import { Link } from "react-router-dom";
import 'NavBar.scss';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;