import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <span>소개</span>
          <span>블로그</span>
          <span>채용</span>
          <span>정보</span>
          <span>도움말</span>
          <span>API</span>
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>인기</span>
          <span>계정</span>
          <span>해시태그</span>
          <span>위치</span>
        </p>
        <p>한국어 © 2021 Instagram from Facebook</p>
      </footer>
    );
  }
}

export default Footer;
