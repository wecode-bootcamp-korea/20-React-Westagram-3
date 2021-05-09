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
    fetch('/data/garamsong/commentData.json')
      .then(res => res.json())
      .then(commentList => this.setState({ commentList }));
  }

  getComment = comment => {
    this.setState({ newComment: comment });
  };

  addComment = e => {
    e.preventDefault();
    const { newComment } = this.state;
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          id: newComment,
          userId: 'dadadada',
          content: this.state.newComment,
          isLiked: '♡',
        },
      ],
    });
  };

  render() {
    const feedData = [
      {
        title: 'trip',
        img: '/././sad',
      },
      {
        title: 'photo',
      },
      {
        title: 'comment',
      },
    ];
    const { commentList, comment } = this.state;
    return (
      <div className="feedsBoxGaramsong">
        {feedData.map(item => {
          return (
            <Feed
              key={item.title}
              title={item.title}
              commentList={commentList}
              addComment={this.addComment}
              getComment={this.getComment}
            />
          );
        })}
      </div>
    );
  }
}

export default FeedsBox;
