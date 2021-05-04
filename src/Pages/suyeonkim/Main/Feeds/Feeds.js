import React from 'react';
import FeedTop from './FeedTop/FeedTop';
import FeedsBtn from './FeedBtn/FeedsBtn';
import WhoLike from './WhoLike/WhoLike';
import FeedImg from './FeedImg/FeedImg';
import FeedComment from './FeedComment/FeedComment';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      feeds: [],
      feedComment: [],
      value: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/suyeonkim/feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  addCommentBar = e => {
    const { feedComment, value } = this.state;
    if (e.key === 'Enter') {
      if (!value) {
        return;
      }

      if (value) {
        this.setState({
          feedComment: feedComment.concat({
            id: feedComment.length + 1,
            userName: 'jayPark',
            content: value,
            isLiked: false,
          }),
          value: '',
        });
      }
    }
  };

  addCommentBtn = e => {
    const { feedComment, value } = this.state;

    if (value) {
      this.setState({
        feedComment: feedComment.concat({
          id: feedComment.length + 1,
          userName: 'jayPark',
          content: value,
          isLiked: false,
        }),
        value: '',
      });
    }
  };

  changekey = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { feeds, feedComment, value } = this.state;

    const list = feeds.map((el, index) => (
      <li className="feeds" key={index}>
        <article className="feed">
          <FeedTop top={el.feedTop} />
          <FeedImg img={el.feedImg} />
          <FeedsBtn />
          <WhoLike />
          <div className="feed__info">
            <p className="feed__info__paragraph">{el.feedContent.content}</p>
            <ul className="feed__comments__lists">
              <FeedComment commentLi={feedComment} />
            </ul>
            <div className="feed__info__date">{el.feedContent.time}</div>
          </div>
          <div className="feed__comments">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="feed__commentBar"
              onKeyPress={this.addCommentBar}
              onChange={this.changekey}
              value={value}
            />
            <button
              type="button"
              className="feed__comment__upload"
              onClick={this.addCommentBtn}
            >
              게시
            </button>
          </div>
        </article>
      </li>
    ));
    return <ul className="feeds-page">{list}</ul>;
  }
}

export default Feeds;
