import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    const { storyInfo } = this.props;
    return (
      <li className="story">
        <div className="userPic"></div>
        <p>{storyInfo}</p>
      </li>
    );
  }
}

export default Story;
