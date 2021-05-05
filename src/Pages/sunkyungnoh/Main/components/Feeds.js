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
    fetch('http://localhost:3000/data/sunkyungnoh/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedData => {
        this.setState({
          feeds: feedData,
        });
      });
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
