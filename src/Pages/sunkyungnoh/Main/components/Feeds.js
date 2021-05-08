import React from 'react';
import StoryBox from './StoryBox';
import Article from './Article';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('/data/sunkyungnoh/feedData.json')
      .then(res => res.json())
      .then(feeds => this.setState({ feeds }));
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="feeds">
        <StoryBox />
        {feeds.map(feed => (
          <Article key={feed.userId} feed={feed} />
        ))}
      </div>
    );
  }
}

export default Feeds;
