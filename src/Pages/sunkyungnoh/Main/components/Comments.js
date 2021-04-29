import React from 'react';
import './Comments.scss';

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        <ul className="commentList">
          <li className="comment"></li>
        </ul>
        <form action="" method="POST">
          <input
            className="commentInput"
            name="commentInput"
            method="post"
            type="text"
            placeholder="댓글 달기 ..."
          />
          <button type="submit" className="commentBtn" disabled>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
