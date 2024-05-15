import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header--mobile">
        <Link to="/" className="header__title">
          <h1 className="header__title">PARINAZ YOUSEFI</h1>
        </Link>
        <Link to="/navbar">
          <FaBars className="icon" />
        </Link>
      </div>
      <div className="header--desktop">
        <Link to="/" className="header__title">
          <h1 className="header__title">PARINAZ YOUSEFI</h1>
        </Link>
        <ul className="header__list">
          <li className="header__item">Projects</li>
          <li className="header__item">Resume</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
