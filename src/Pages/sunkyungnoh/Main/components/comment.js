import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { key, userName, content, isLiked, addLike } = this.props;

    return (
      <li key={key} className="comment">
        <span>{userName}</span>
        <div>{content}</div>
        <button onClick={addLike}>
          <img
            alt="좋아요버튼"
            src="/images/sunkyungnoh/heart.png"
            style={{ backgroundColor: isLiked ? 'red' : 'none' }}
          />
        </button>
      </li>
    );
  }
}

export default Comment;
