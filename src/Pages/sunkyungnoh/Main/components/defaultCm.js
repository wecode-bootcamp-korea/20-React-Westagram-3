import React, { Component } from 'react';

class DefaultCm extends Component {
  render() {
    const { id, userId, msg } = this.props;
    return (
      <li key={id} className="comment">
        <span>{userId}</span>
        <div>{msg}</div>
        <button>
          <img alt="좋아요버튼" src="/images/sunkyungnoh/heart.png" />
        </button>
      </li>
    );
  }
}

export default DefaultCm;
