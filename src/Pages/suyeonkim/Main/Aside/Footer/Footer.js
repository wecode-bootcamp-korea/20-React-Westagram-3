import React from 'react';
import FooterLi from './FooterLi/FooterLi';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__links">
          <FooterLi />
        </ul>
        <div className="footer__date">@ 2019 INSTAGRAM</div>
      </footer>
    );
  }
}

export default Footer;
