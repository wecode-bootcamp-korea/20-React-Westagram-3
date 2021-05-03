import React from 'react';

class Comment extends React.Component {
  render() {
    // const { text } = this.props;
    const { userId, content, isLiked } = this.props;
    return (
      <li className="replyValue">
        <span className="userId">{userId}</span>
        <p className="replyText">{content}</p>
        <button className="like">{isLiked}</button>
      </li>
    );
  }
}

export default Comment;
