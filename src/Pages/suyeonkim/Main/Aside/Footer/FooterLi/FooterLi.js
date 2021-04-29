import React from 'react';

class FooterLi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagLinks: [
        {
          linkName: '소개',
          linkURL: '#',
        },
        {
          linkName: '도움말',
          linkURL: '#',
        },
        {
          linkName: '홍보 센터',
          linkURL: '#',
        },
        {
          linkName: 'API',
          linkURL: '#',
        },
        {
          linkName: '채용 정보',
          linkURL: '#',
        },
        {
          linkName: '개인정보처리방침',
          linkURL: '#',
        },
        {
          linkName: '약관',
          linkURL: '#',
        },
        {
          linkName: '위치',
          linkURL: '#',
        },
        {
          linkName: '인기 계정',
          linkURL: '#',
        },
        {
          linkName: '해시태그',
          linkURL: '#',
        },
        {
          linkName: '언어',
          linkURL: '#',
        },
      ],
    };
  }

  render() {
    const list = this.state.tagLinks.map((el, index) => {
      return (
        <li className="footer__link" key={index}>
          <a href={el.linkURL}>{el.linkName}</a>
        </li>
      );
    });

    return <>{list}</>;
  }
}

export default FooterLi;
