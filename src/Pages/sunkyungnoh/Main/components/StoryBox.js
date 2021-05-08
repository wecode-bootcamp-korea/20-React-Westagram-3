import React from 'react';
import Story from './Story';
import './StoryBox.scss';

class StoryBox extends React.Component {
  constructor() {
    super();
    this.state = {
      storyInfo: [],
    };
  }

  componentDidMount() {
    fetch('/data/sunkyungnoh/storyData.json')
      .then(res => res.json())
      .then(storyInfo => this.setState({ storyInfo }));
  }

  render() {
    const { storyInfo } = this.state;
    return (
      <ul className="storyBox">
        {storyInfo.map(story => (
          <Story key={story.userName} storyInfo={story.userName} />
        ))}
      </ul>
    );
  }
}

export default StoryBox;
