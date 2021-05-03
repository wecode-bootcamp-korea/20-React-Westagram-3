import React from 'react';
import FeedTop from './FeedTop/FeedTop';
import FeedsBtn from './FeedBtn/FeedsBtn';
import WhoLike from './WhoLike/WhoLike';
import FeedImg from './FeedImg/FeedImg';
import FeedComment from './FeedComment/FeedComment';
import CommentData from './commentData';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      feedTop: {
        authorName: 'suyeon02',
        authorImg:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e',
      },
      feedImg: {
        img:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/176103490_186915709818068_3864201109085152462_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=t1vmOhCoUwcAX_Y9RKG&edm=AAeKFY8AAAAA&ccb=7-4&oh=465960583032f093db8ef464bdd1b716&oe=60A35F69&_nc_sid=c982ba',
      },
      feedContent: {
        content: 'wecode 3주차!!! 모두 홧팅~~^^',
        time: '42분전',
      },
      feedComment: [],
      value: '',
    };
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

  componentDidMount() {
    this.setState({
      feedComment: CommentData,
    });
  }

  render() {
    const { feedTop, feedImg, feedContent, feedComment, value } = this.state;
    return (
      <ul className="feeds-page">
        <li className="feeds">
          <article className="feed">
            <FeedTop top={feedTop} />
            <FeedImg img={feedImg} />
            <FeedsBtn />
            <WhoLike />
            <div className="feed__info">
              <p className="feed__info__paragraph">{feedContent.content}</p>
              <ul className="feed__comments__lists">
                <FeedComment commentLi={feedComment} />
              </ul>
              <div className="feed__info__date">{feedContent.time}</div>
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
      </ul>
    );
  }
}

export default Feeds;
