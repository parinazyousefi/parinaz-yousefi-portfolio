import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import resume from '../../assets/documents/Parinaz_Yousefi_Resume.pdf';
import logo from '../../assets/images/icon1.png';
const Header = () => {
  return (
    <header>
      <div className="header--mobile">
        <Link to="/" className="header__title">
          <img src={logo} alt="parinaz logo"></img>
          <h1 className="header__title">PARINAZ YOUSEFI</h1>
        </Link>
        <Link to="/navbar">
          <FaBars className="icon" />
        </Link>
      </div>
      <div className="header--desktop">
        <Link to="/" className="header__title">
        <img src={logo} alt="parinaz logo"></img>
          <h1 className="header__title">PARINAZ YOUSEFI</h1>
        </Link>
        <ul className="header__list">
          <HashLink to ='#projects' className="nav-link">
          <li className="header__item">Projects</li>
          </HashLink>
          <a href={resume} target = "_blank" className="nav-link">
          <li className="header__item">Resume</li>
          </a>
        </ul>
      </div>
    </header>
  );
};
export default Header;
