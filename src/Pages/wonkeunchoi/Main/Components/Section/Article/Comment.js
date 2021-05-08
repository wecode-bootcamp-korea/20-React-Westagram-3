import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.commentList.map(el => (
          <li>{el.text}</li>
        ))}
      </>
    );
  }
}

export default Comment;
