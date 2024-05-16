import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <ul className="navbar__list">
      <HashLink to='/#projects'>
        <li className="navbar__item">Projects</li>
      </HashLink>
      <li className="navbar__item">Resume</li>
      <Link to="/">
        <FaTimes className="icon" />
      </Link>
    </ul>
  );
};
export default Navbar;
