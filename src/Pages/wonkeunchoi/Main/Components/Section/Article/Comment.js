import React from 'react';
// import Article from './Article';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.commentList.map(el => (
          <li>wonkeun_e : {el.text}</li>
        ))}
      </>
    );
  }
}
// {this.state.comments.map(el => (
//   <li>wonkeun_e: {el.text}</li>
// ))}
export default Comment;
