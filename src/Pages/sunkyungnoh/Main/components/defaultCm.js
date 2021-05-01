import React, { Component } from 'react';

class DefaultCm extends Component {
  render() {
    const { id, msg } = this.props;
    return (
      <li className="comment">
        <span>{id}</span>
        <div>{msg}</div>
        <button>
          <img alt="좋아요버튼" src="/images/sunkyungnoh/heart.png" />
        </button>
      </li>
    );
  }
}

export default DefaultCm;
