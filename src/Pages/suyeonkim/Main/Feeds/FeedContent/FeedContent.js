import React from 'react';
import './FeedContent.scss';

class FeedComment extends React.Component {
  render() {
    return (
      <div className="feed__info">
        <p className="feed__info__paragraph">
          <a href="##">wecode</a> 3주차!!! 모두 홧팅~~^^
        </p>
        <ul className="feed__comments__lists"></ul>
        <div className="feed__info__date">42분 전</div>
      </div>
    );
  }
}

export default FeedComment;
