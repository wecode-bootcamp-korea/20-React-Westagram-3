import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <ul className="footerText">
          <li>
            <a href="#">소개·</a>
          </li>
          <li>
            <a href="#">도움말·</a>
          </li>
          <li>
            <a href="#">홍보센터·</a>
          </li>
          <li>
            <a href="#">API·</a>
          </li>
          <li>
            <a href="#">채용 정보·</a>
          </li>
          <li>
            <a href="#">개인정보처리방침·</a>
          </li>
          <li>
            <a href="#">약관·</a>
          </li>
          <li>
            <a href="#">위치·</a>
          </li>
          <li>
            <a href="#">인기 계정·</a>
          </li>
          <li>
            <a href="#">해시태그·</a>
          </li>
          <li>
            <a href="#">언어·</a>
          </li>
        </ul>
        <p className="footerText rights">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    );
  }
}

export default Footer;
