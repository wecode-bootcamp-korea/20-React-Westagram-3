import React from 'react';
import './Comments.scss';
import Comment from './comment';
import DefaultCm from './defaultCm';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentArr: [],
      newCommemt: '',
      value: '',
      defaultCms: [
        { id: 0, userId: '도리', msg: '신기' },
        { id: 1, userId: '노돌', msg: '하다' },
      ],
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
      value: '',
    });
  };

  render() {
    const { commentArr, newComment, defaultCms, value } = this.state;
    return (
      <div className="comments">
        <ul className="commentList">
          {defaultCms.map(cm => (
            <DefaultCm key={cm.id} userId={cm.userId} msg={cm.msg} />
          ))}
          {commentArr.map(text => (
            <Comment text={text} />
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
