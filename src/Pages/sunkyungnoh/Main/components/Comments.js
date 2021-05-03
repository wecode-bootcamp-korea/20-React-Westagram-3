import React from 'react';
import './Comments.scss';
import Comment from './comment';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentArr: ['안녕', '하세요'],
      newComment: '',
      value: '',
    };
  }

  addComment = e => {
    const { commentArr, newComment } = this.state;
    e.preventDefault();
    commentArr.push(newComment);
    this.setState({
      value: '',
    });
  };

  render() {
    const { commentArr, newComment, value } = this.state;
    return (
      <div className="comments">
        <ul className="commentList">
          {commentArr.map(text => (
            <Comment key={new Date().getTime()} text={text} />
          ))}
        </ul>
        <form onSubmit={this.addComment}>
          <input
            onChange={e => {
              this.setState({ newComment: e.target.value });
              this.setState({ value: e.target.value });
            }}
            value={value}
            className="commentInput"
            name="commentInput"
            method="post"
            type="text"
            placeholder="댓글 달기 ..."
          />
          <button
            type="submit"
            className={`commentBtn ${newComment && 'active'}`}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
