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
  render() {
    const { feeds } = this.state;

    const list = feeds.map((feedData, index) => (
      <Feed feedInfo={feedData} key={feedData.feedId} />
    ));

    return <ul className="feeds-page">{list}</ul>;
  }
}

export default Feeds;
