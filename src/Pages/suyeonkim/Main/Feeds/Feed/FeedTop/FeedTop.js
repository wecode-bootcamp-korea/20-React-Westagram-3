import React from 'react';
import './FeedTop.scss';

class FeedTop extends React.Component {
  render() {
    const { top } = this.props;
    return (
      <div className="feed-top">
        <div className="feed__author">
          <img
            alt="author__image"
            src={top.authorImg}
            className="author__avator"
          />
          <span className="author__name">
            <a href="##">{top.authorName}</a>
          </span>
        </div>
        <div className="feed-top__btn">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

export default FeedTop;
