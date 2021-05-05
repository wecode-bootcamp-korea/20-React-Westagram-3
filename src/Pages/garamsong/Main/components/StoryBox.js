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
    fetch('http://localhost:3000/data/garamsong/storyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(story => {
        this.setState({
          stories: story,
        });
      });
  }
  render() {
    const { stories } = this.state;
    return (
      <ul className="storyBoxGaramsong">
        {stories.map(story => {
          return (
            <li className="eachStory">
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
