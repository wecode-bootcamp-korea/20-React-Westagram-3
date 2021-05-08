import React from 'react';
import Header from './Header';
import FeedOptions from './FeedOptions';
import PhotoInfo from './PhotoInfo';
import Comments from './Comments';
import './Article.scss';

class Article extends React.Component {
  render() {
    const { feed } = this.props;
    return (
      <article>
        <Header userId={feed.userId} />
        <img alt="posted img" src={feed.url} className="photo" />
        <FeedOptions />
        <PhotoInfo desc={feed.desc} userId={feed.userId} />
        <Comments prevComment={feed.commentArr} />
      </article>
    );
  }
}

export default Article;
