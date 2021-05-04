import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Comment.scss';
import '../../../../../Styles/seyongyun/common.scss';

class Comment extends React.Component {
  render() {
    return (
      <li key={this.props.indexContainer} className="replyElement">
        <span>id </span>
        <span>{this.props.textContainer}</span>
      </li>
    );
  }
}

// {this.state.commentList.map(text => (
//   <li>
//     <span>id </span>
//     <span>{text}</span>
//   </li>
// ))}

export default withRouter(Comment);
