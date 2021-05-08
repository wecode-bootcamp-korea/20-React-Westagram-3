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
    fetch('/data/sunkyungnoh/footerData.json')
      .then(res => res.json())
      .then(footer => this.setState({ footer }));
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
