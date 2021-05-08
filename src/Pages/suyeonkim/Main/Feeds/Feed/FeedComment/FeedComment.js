import React from 'react';
import './FeedComment.scss';

class FeedComment extends React.Component {
  render() {
    const { commentLi } = this.props;

    const list = commentLi.map(el => (
      <li className="feed__comments__list" key={el.id}>
        <span>{el.userName}</span>
        <p className="feed__comments__contents">{el.content}</p>
        <div className="feed__comments__goodBtn">
          <img alt="good__button" src="/images/suyeonkim/dm.png" />
        </div>
        <div className="feed__comments__delBtn" onClick={this.activeDelete}>
          <img alt="delete__button" src="/images/suyeonkim/comment.jpg" />
        </div>
      </li>
    ));

    return <>{list}</>;
  }
}

export default FeedComment;
