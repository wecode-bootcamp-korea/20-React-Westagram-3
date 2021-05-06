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
    fetch('http://localhost:3000/data/sunkyungnoh/storyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(storyData => {
        this.setState({
          storyInfo: storyData,
        });
      });
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
