import React, { Component } from 'react';
import './Slide.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = {
      img: [
        {
          id: 1,
          url:
            'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg',
        },
        {
          id: 2,
          url:
            'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
        },
        {
          id: 3,
          url:
            'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
        },
        {
          id: 4,
          url:
            'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
        },
      ],
    };
  }

  render() {
    const { img } = this.state;
    return (
      <div className="slide">
        <div className="slideImg">
          <img alt="imgExample" src={img[0].url} />
        </div>
      </div>
    );
  }
}

export default Slide;
