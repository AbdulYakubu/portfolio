/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import React3 from '../assets/react3.avif';
import React2 from '../assets/react2.png';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I'm I???</h1>
        <p>
          Thanks for your interest, here is a quick story of me and this
          website.
          <br />
          I'm Aziz Abdul Yakubu, I'm 24years of age. i was born and raised in a
          small town called Koforidua in Ghana. Where i lived with my extended
          family.
          <br />
          Growing up, I was always interested in computing, so I decided to
          pursue a degree in computing. I attended a local university called{' '}
          <br />
          <strong color="blue">
            {' '}
            Ghana Communication Technology University{' '}
          </strong>
          <br />
          and graduated with a Bachelor's degree in Computer Engineering. During
          college, I also participated in a huawei programming study, which was
          an amazing experience.
          <br />I am mainly a front-end Developer, but have a slight knowledge
          about back-end development and data structure & Algorithm . Besides
          these I know a little about{' '}
          <abbr title="Atificial Intelligence">AI</abbr>, LINUX and database as
          well.
          <br />
          This portfolio webpage is basically one of my Web Development project
          which is built using <strong>React</strong>. Here you can also find
          some of my basic
          <br />
          <Link to="/project">
            <button className="btn">Projects</button>
          </Link>
          . Thanks again for reading this, because of people like you, it exists
          and prospers!
          <br />
          Cheers,
          <br />
          <b>AzizBA</b>
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <div className="right">
          <div className="img-container">
            <div className=" top">
              <img src={React3} alt="react-image1" className="img" />
            </div>
            <div className="bottom">
              <img src={React2} alt="react-image2" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
