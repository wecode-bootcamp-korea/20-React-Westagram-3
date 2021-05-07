import React from 'react';
import PeopleList from './PeopleLi/PeopleList';
import './PeopleStory.scss';

class PeopleStory extends React.Component {
  render() {
    const { storyInfo } = this.props;

    return (
      <section className="people__story">
        <div className="people__story-top">
          <div className="people__story__title">스토리</div>
          <div className="people__story__show">모두 보기</div>
        </div>
        <ul className="people__story__person__list">
          <PeopleList infos={storyInfo} />
        </ul>
      </section>
    );
  }
}

export default PeopleStory;
