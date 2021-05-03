import React from 'react';
import Header from './Header';
import FeedOptions from './FeedOptions';
import PhotoInfo from './PhotoInfo';
import Comments from './Comments';
import './Article.scss';

class Article extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <article>
        <Header />
        <img alt="posted img" src={url} className="photo" />
        <FeedOptions />
        <PhotoInfo />
        <Comments />
      </article>
    );
  }
}

export default Article;
