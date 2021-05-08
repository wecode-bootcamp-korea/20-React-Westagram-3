import React from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('/data/suyeonkim/feed.json')
      .then(res => res.json())
      .then(feeds => {
        this.setState({
          feeds,
        });
      });
  }

  render() {
    const { feeds } = this.state;

    return (
      <ul className="feeds-page">
        {feeds.map(feedData => (
          <Feed feedInfo={feedData} key={feedData.feedId} />
        ))}
      </ul>
    );
  }
}

export default Feeds;
