import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { key, userName, content, isLiked } = this.props;

    return (
      <li key={key} className="comment">
        <span>{userName}</span>
        <div>{content}</div>
        <button>
          <img
            alt="좋아요버튼"
            src="/images/sunkyungnoh/heart.png"
            className={isLiked ? 'liked' : ''}
          />
        </button>
      </li>
    );
  }
}

export default Comment;
