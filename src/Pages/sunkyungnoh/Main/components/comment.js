import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { text } = this.props;
    return (
      <li className="comment">
        <span>아이디</span>
        <div>{text}</div>
        <button>
          <img alt="좋아요버튼" src="/images/sunkyungnoh/heart.png" />
        </button>
      </li>
    );
  }
}

export default Comment;
