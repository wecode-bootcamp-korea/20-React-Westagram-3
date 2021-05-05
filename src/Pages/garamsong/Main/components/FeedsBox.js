import React from 'react';
import Feed from './Feed';
import './FeedsBox.scss';

class FeedsBox extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      newComment: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/garamsong/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(comments => {
        this.setState({
          commentList: comments,
        });
      });
  }

  addComment = e => {
    e.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          id: 4,
          userId: 'dadadada',
          content: this.state.newComment,
          isLiked: '♡',
        },
      ],
    });
  };

  getComment = comment => {
    this.setState({ newComment: comment });
  };

  render() {
    const { commentList } = this.state;
    return (
      <div className="feedsBoxGaramsong">
        <Feed
          commentList={commentList}
          addComment={this.addComment}
          getComment={this.getComment}
        />
        <Feed
          commentList={commentList}
          addComment={this.addComment}
          getComment={this.getComment}
        />
      </div>
    );
  }
}

export default FeedsBox;
