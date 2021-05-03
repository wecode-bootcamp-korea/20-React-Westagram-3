import React from 'react';
import StoryBox from './StoryBox';
import Article from './Article';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      url: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/urlData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          url: data,
        });
      });
  }

  render() {
    const { url } = this.state;
    return (
      <div className="feeds">
        <StoryBox />
        {url.map(url => (
          <Article url={url} />
        ))}
      </div>
    );
  }
}

export default Feeds;
