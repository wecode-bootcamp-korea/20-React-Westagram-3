import React from 'react';
import './FeedComment.scss';

class FeedComment extends React.Component {
  render() {
    const { commentLi } = this.props;
    console.log(commentLi);
    const list = commentLi.map((el, index) => (
      <li className="feed__comments__list" key={index}>
        <p className="feed__comments__contents">{el}</p>
        <div className="feed__comments__goodBtn">
          <img alt="good__button" src="/images/suyeonkim/dm.png" />
        </div>
        <div className="feed__comments__delBtn">
          <img alt="delete__button" src="/images/suyeonkim/comment.jpg" />
        </div>
      </li>
    ));

    return <>{list}</>;
  }
}

export default FeedComment;
