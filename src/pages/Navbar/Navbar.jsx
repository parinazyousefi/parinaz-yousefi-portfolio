import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import resume from '../../assets/documents/Parinaz_Yousefi_Resume.pdf';


const Navbar = () => {
  return (
    <ul className="navbar__list">
      <HashLink to='/#projects' className="nav-link">
        <li className="navbar__item">Projects</li>
      </HashLink>
      <a href={resume}  target = "_blank" className="nav-link">
      <li className="navbar__item">Resume</li>
      </a>
      <Link to="/">
        <FaTimes className="icon" />
      </Link>
    </ul>
  );
};
export default Navbar;
