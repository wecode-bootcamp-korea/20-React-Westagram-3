import React from 'react';
import './FeedContent.scss';

class FeedContent extends React.Component {
  render() {
    const { content, comment } = this.props;

    const list = comment.commentLi.map((el, index) => (
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

    return (
      <div className="feed__info">
        <p className="feed__info__paragraph">{content.content}</p>
        <ul className="feed__comments__lists">{list}</ul>
        <div className="feed__info__date">{content.time}</div>
      </div>
    );
  }
}

export default FeedContent;
