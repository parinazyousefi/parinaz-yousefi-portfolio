import { Link } from 'react-router-dom';
import './Navbar.scss';
import {FaTimes} from 'react-icons/fa';

const Navbar=()=>{
    return(
        <ul className='navbar__list'>
                <li className='navbar__item'>Projects</li>
                <li className='navbar__item'>Resume</li>
                <Link to='/'>
                <FaTimes className='icon'/>
                </Link>
            </ul>
    )
}
export default Navbar;