import React from 'react';
import footerLinks from './FooterLInksList';

class FooterLi extends React.Component {
  render() {
    const footerLinksList = footerLinks;
    const list = footerLinksList.map((footerLink, index) => (
      <li className="footer__link" key={index}>
        <a href={footerLink.linkURL}>{footerLink.linkName}</a>
      </li>
    ));

    return <>{list}</>;
  }
}

export default FooterLi;
