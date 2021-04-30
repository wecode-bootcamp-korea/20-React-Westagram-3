import React from 'react';

class FeedImg extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div className="feed__contants">
        <img alt="feed__image" src={img.img} className="feed__photos" />
      </div>
    );
  }
}

export default FeedImg;
