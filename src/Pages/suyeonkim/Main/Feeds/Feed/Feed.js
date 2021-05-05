import React from 'react';
import FeedTop from './FeedTop/FeedTop';
import FeedsBtn from './FeedBtn/FeedsBtn';
import WhoLike from './WhoLike/WhoLike';
import FeedImg from './FeedImg/FeedImg';
import FeedComment from './FeedComment/FeedComment';

class Feed extends React.Component {
  constructor() {
    super();

    this.state = {
      feedComment: [],
      commentId: 0,
      inputComment: '',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/suyeonkim/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(commentLi => {
        this.setState({
          feedComment: commentLi,
        });
      });
  }

  addComment = e => {
    e.preventDefault();
    const { feedInfo } = this.props;
    const matchId = this.state.feedComment.filter(
      el => feedInfo.feedId === el.feedId
    );

    const list = [...this.state.feedComment];
    this.setState({
      feedComment: list.concat({
        id: matchId.length + 1,
        userName: 'suyeonKim',
        content: this.state.inputComment,
        isLiked: false,
        feedId: feedInfo.feedId,
      }),
      inputComment: '',
    });
    console.log(list);
  };

  temValue = e => {
    this.setState({
      inputComment: e.target.value,
    });
  };

  render() {
    const { feedInfo } = this.props;
    const { feedComment } = this.state;

    const list = feedComment.filter(el => el.feedId === feedInfo.feedId);

    return (
      <li className="feeds">
        <article className="feed">
          <FeedTop top={feedInfo.feedTop} />
          <FeedImg img={feedInfo.feedImg} />
          <FeedsBtn />
          <WhoLike />
          <div className="feed__info">
            <p className="feed__info__paragraph">
              {feedInfo.feedContent.content}
            </p>
            <ul className="feed__comments__lists">
              <FeedComment commentLi={list} addComment={this.addComment} />
            </ul>
            <div className="feed__info__date">{feedInfo.feedContent.time}</div>
          </div>
          <form className="feed__comments" onSubmit={this.addComment}>
            <input
              type="text"
              placeholder="댓글 달기..."
              className="feed__commentBar"
              onChange={this.temValue}
              value={this.state.inputComment}
            />
            <button
              type="button"
              className="feed__comment__upload"
              onClick={this.addComment}
            >
              게시
            </button>
          </form>
        </article>
      </li>
    );
  }
}

export default Feed;
