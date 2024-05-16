import './Hero.scss';
import LinkedInIcon from "../../assets/icons/icons8-linkedin.svg";
import GithubIcon from "../../assets/icons/icons8-github (1).svg";
import profile from '../../assets/images/profile.jpg';
const Hero=()=>{
    return(
        <div className="hero">
        <div className="hero__img">
            <img src={profile} alt="hero" className="hero__profile"></img>
          <div className="hero--icons">
            <a href="https://www.linkedin.com/in/parinaz-yousefi/">
              <img src={LinkedInIcon} alt="linked in"></img>
            </a>
            <a href="https://github.com/parinazyousefi">
              <img src={GithubIcon} alt="linked in"></img>
            </a>
          </div>
        </div>
        <div className="hero__content">
          <h2 className="hero__title">Hello,I'm Parinaz </h2>
          <p className="hero__paragraph">
            I'm software developer based in Toronto.I studeied Computer
            Engineering Technology and worked in IT.After graduation I wanted to
            continue my carear in software development so I enrolled in a
            bootcamp.I will be so happy to collaborate or help you with your
            projects!
          </p>
          <a href="mailto:parinazyousefi1@gmail.com">
            <button className="btn">Contact Me!</button>
          </a>
        </div>
      </div>
    )
}
export default Hero;