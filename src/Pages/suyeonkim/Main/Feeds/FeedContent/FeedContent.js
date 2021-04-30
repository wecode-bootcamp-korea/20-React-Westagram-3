import React from 'react';
import './FeedContent.scss';

class FeedComment extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="feed__info">
        <p className="feed__info__paragraph">{content.content}</p>
        <ul className="feed__comments__lists"></ul>
        <div className="feed__info__date">{content.time}</div>
      </div>
    );
  }
}

export default FeedComment;
