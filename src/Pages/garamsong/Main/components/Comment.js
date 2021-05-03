import React from 'react';

class Comment extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <li className="replyValue">
        <span className="userId">galmi.song</span>
        <p className="replyText">{text}</p>
        <button className="like">heart</button>
      </li>
    );
  }
}

export default Comment;
