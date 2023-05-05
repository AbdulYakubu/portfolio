/* eslint-disable react/no-unescaped-entities */
import './FooterStyles.css'

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Koforidua, KNT/D179</p>
              <p>Ghana</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {' '}
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +233-542-271-847
            </h4>
          </div>
          <div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: '#fff', marginRight: '2rem' }}
                />
                yakubuabdulaziz641@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>ABOUT ME</h4>
          <p>
            This is me Aziz Abdul Yakubu. I'm a Front-end developer, i enjoy
            discussing about new projects and new designs.
          </p>

          <div className="social">
            <h4>
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />{' '}
              Aziz Bha
            </h4>

            <h4>
              <FaWhatsapp
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />{' '}
              +233-542-271-847
            </h4>

            <h4>
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />{' '}
              @AzizBA_8
            </h4>
            <h4>
              <FaLinkedinIn
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />{' '}
              Yakubu Abdul Aziz
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
