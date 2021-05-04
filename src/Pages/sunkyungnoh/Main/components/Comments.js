import React from 'react';
import Comment from './comment';
import './Comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentArr: [],
      newComment: '',
      value: '',
    };
  }

  componentDidMount() {
    this.setState({ commentArr: this.props.prevComment });
  }

  addComment = e => {
    e.preventDefault();
    const { commentArr, newComment } = this.state;
    this.setState({
      commentArr: [
        ...commentArr,
        {
          id: commentArr.length + 1,
          userName: '펭수',
          content: newComment,
          isLiked: false,
        },
      ],
      value: '',
    });
  };

  render() {
    const { commentArr, newComment, value } = this.state;
    return (
      <div className="comments">
        <ul className="commentList">
          {commentArr.map(comment => (
            <Comment
              key={comment.id}
              userName={comment.userName}
              content={comment.content}
              isLiked={comment.isLiked}
            />
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
