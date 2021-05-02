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
      empty: '',
      defaultCms: [
        { id: '도리', msg: '신기' },
        { id: '노돌', msg: '하다' },
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
      empty: '',
    });
  };

  render() {
    const { commentArr, newComment, empty, defaultCms } = this.state;
    return (
      <div className="comments">
        <ul className="commentList">
          {defaultCms.map(cm => (
            <DefaultCm id={cm.id} msg={cm.msg} />
          ))}
          {commentArr.map(text => (
            <Comment text={text} />
          ))}
        </ul>
        <form onSubmit={this.addComment}>
          <input
            onChange={e => {
              this.setState({ newComment: e.target.value });
              this.setState({ empty: e.target.value });
            }}
            value={empty}
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
