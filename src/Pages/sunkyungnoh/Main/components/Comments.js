import React from 'react';
import './Comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentArr: [],
      newCommemt: '',
      empty: '',
    };
  }

  addComment = e => {
    e.preventDefault();
    let newCommentArr = [...this.state.commentArr];
    newCommentArr.push(this.state.newComment);
    this.setState({
      commentArr: newCommentArr,
    });
    this.setState({
      empty: '',
    });
  };

  render() {
    return (
      <div className="comments">
        <ul className="commentList">
          <li className="comment">
            {this.state.commentArr.map(i => (
              <div>{i}</div>
            ))}
          </li>
        </ul>
        <form onSubmit={this.addComment}>
          <input
            onChange={e => {
              this.setState({ newComment: e.target.value });
              this.setState({ empty: e.target.value });
            }}
            value={this.state.empty}
            className="commentInput"
            name="commentInput"
            method="post"
            type="text"
            placeholder="댓글 달기 ..."
          />
          <button
            type="submit"
            className={`commentBtn ${this.state.newComment && 'active'}`}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
