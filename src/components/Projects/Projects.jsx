import './Projects.scss';
import watchlist from "../../assets/images/discover.png";

const Projects = () => {
  return (
    <div className='projects' id='#projects'>
      <h2 className="projects__title">Projects</h2>
      <div className="project">
      <h3 className="project__title">Watchlist</h3>
      <div className="project__content">
        <img
          src={watchlist}
          alt="watclist thumbnail"
          className="project__img"
        ></img>
        <p className="project__info">
          Watchlist is a web app designed to help users discover and save their
          favorite movies and TV shows. Watchlist addresses the need for a
          centralized platform where users can store all their to-watch shows
          from different platforms while also discovering new ones.
          <ul className="project__info">
            <li className="project__info project__feature"><b>Features:</b></li>
            <li className="project__info project__feature"><b>Saved Shows/Movies List:</b> Users can view a list of all their saved shows and movies.</li>
            <li className="project__info project__feature"><b>Discover List:</b> Users can discover trending movies and TV shows.</li>
            <li className="project__info project__feature"><b>Search Functionality:</b>Users can search for specific movies or TV shows.</li>
            <li className="project__info project__feature"><b>Genre Filtering:</b>Users can filter movies and shows based on selected genres.</li>
        </ul>
        <ul className="tech__list">
            <li className="tech__item">React</li>
            <li className="tech__item">Axios</li>
            <li className="tech__item">TMDB API</li>
        </ul>
        <a href="https://github.com/parinazyousefi/parinaz-yousefi-watchlist" className="project__link">View sorcue code</a>
        </p>
      </div>
    </div>
      
    </div>
  );
};
export default Projects;
