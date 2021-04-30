import React from 'react';
import RecoLi from './RecoLi/RecoLi';
import './RecoPerson.scss';

class RecoPerson extends React.Component {
  render() {
    const { RecoPeople } = this.props;

    return (
      <section className="recommend__people">
        <div className="recommend__people-top">
          <div className="recommend__people__title">회원님을 위한 추천</div>
          <div className="recommend__people__show">모두 보기</div>
        </div>
        <ul className="recommend__people__person__list">
          <RecoLi Infos={RecoPeople} />
        </ul>
      </section>
    );
  }
}

export default RecoPerson;
