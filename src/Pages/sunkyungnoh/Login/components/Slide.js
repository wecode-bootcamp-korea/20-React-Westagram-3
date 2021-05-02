import React, { Component } from 'react';
import './Slide.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = {
      url: [
        'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
      ],
    };
  }

  render() {
    const { url } = this.state;
    return (
      <div className="slide">
        <div className="slideImg">
          <img alt="imgExample" src={url[1]} />
        </div>
      </div>
    );
  }
}

export default Slide;
