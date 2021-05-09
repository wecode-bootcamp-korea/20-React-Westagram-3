import React from 'react';
import './StoryBox.scss';

class StoryBox extends React.Component {
  constructor() {
    super();

    this.state = {
      stories: [],
    };
  }
  componentDidMount() {
    fetch('/data/garamsong/storyData.json')
      .then(res => res.json())
      .then(stories => this.setState({ stories }));
  }
  render() {
    const { stories } = this.state;
    return (
      <ul className="storyBoxGaramsong">
        {stories.map(story => {
          return (
            <li key={story.id} className="eachStory">
              <div className="storyImgBox">
                <img
                  alt="profile"
                  className="profileImgRadius storyImg"
                  src={story.imgUrl}
                />
              </div>
              <p>{story.userName}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default StoryBox;
