import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footer: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sunkyungnoh/footerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(footerData => {
        this.setState({
          footer: footerData,
        });
      });
  }

  render() {
    const { footer } = this.state;
    return (
      <footer>
        <p>
          {footer.map(link => (
            <span key={link.id}>{link.content}</span>
          ))}
        </p>
        <p>한국어 © 2021 Instagram from Facebook</p>
      </footer>
    );
  }
}

export default Footer;
