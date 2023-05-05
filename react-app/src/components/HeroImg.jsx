/* eslint-disable react/no-unescaped-entities */
import './HeroImgStyles.css';
import IntroImg from '../assets/intro-img.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="intro-img" />
      </div>
      <div className="content">
        <div>
          <p>Hi, I'm aziz abdul yakubu</p>

          <h1>FRONT-END DEVELOPER</h1>
        </div>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
