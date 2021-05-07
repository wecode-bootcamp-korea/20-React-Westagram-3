import React from 'react';
import RecommendLi from './RecommendLi/RecommendLi';
import './RecommendPerson.scss';

class RecommendPerson extends React.Component {
  render() {
    const { recommendPeople } = this.props;

    return (
      <section className="recommend__people">
        <div className="recommend__people-top">
          <div className="recommend__people__title">회원님을 위한 추천</div>
          <div className="recommend__people__show">모두 보기</div>
        </div>
        <ul className="recommend__people__person__list">
          <RecommendLi infos={recommendPeople} />
        </ul>
      </section>
    );
  }
}

export default RecommendPerson;
