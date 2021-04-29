import React from 'react';
import FeedsBtn from './FeedBtn/FeedsBtn';
import WhoLike from './WhoLike/WhoLike';
import FeedContent from './FeedContent/FeedContent';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <ul className="feeds-page">
        <li className="feeds">
          <article className="feed">
            <div className="feed-top">
              <div className="feed__author">
                <img
                  alt="author__image"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e"
                  className="author__avator"
                />
                <span className="author__name">
                  <a href="##">suyeon02</a>
                </span>
              </div>
              <div className="feed-top__btn">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="feed__contants">
              <img
                alt="feed__image"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/176103490_186915709818068_3864201109085152462_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=t1vmOhCoUwcAX_Y9RKG&edm=AAeKFY8AAAAA&ccb=7-4&oh=465960583032f093db8ef464bdd1b716&oe=60A35F69&_nc_sid=c982ba"
                className="feed__photos"
              />
            </div>
            <FeedsBtn />
            <WhoLike />
            <FeedContent />
            <div className="feed__comments">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="feed__commentBar"
              />
              <button type="button" className="feed__comment__upload">
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
