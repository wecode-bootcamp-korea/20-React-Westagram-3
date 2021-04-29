import React from 'react';
import './RecoPerson.scss';

class RecoPerson extends React.Component {
  render() {
    return (
      <section className="recommend__people">
        <div className="recommend__people-top">
          <div className="recommend__people__title">회원님을 위한 추천</div>
          <div className="recommend__people__show">모두 보기</div>
        </div>
        <ul className="recommend__people__person__list">
          <li className="recommend__person">
            <div className="recommend__person__info">
              <img
                alt="person4__profile"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165180100_486058029230071_8234944855139302586_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MMiqlztef1oAX_LwD6h&edm=AEF8tYYAAAAA&ccb=7-4&oh=b6dd9cb236f3f9ee8f0f88930cdf6445&oe=60A2432C&_nc_sid=a9513d"
              />
              <div className="recommend__person__title">
                <div className="recommend__person__name">puts_officail_</div>
                <div className="recommend__person__state">회원을 위한 추천</div>
              </div>
            </div>
            <div className="recommend__person__followBtn">팔로우</div>
          </li>
          <li className="recommend__person">
            <div className="recommend__person__info">
              <img
                alt="person5__image"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165180100_486058029230071_8234944855139302586_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MMiqlztef1oAX_LwD6h&edm=AEF8tYYAAAAA&ccb=7-4&oh=b6dd9cb236f3f9ee8f0f88930cdf6445&oe=60A2432C&_nc_sid=a9513d"
              />
              <div className="recommend__person__title">
                <div className="recommend__person__name">puts_officail_</div>
                <div className="recommend__person__state">회원을 위한 추천</div>
              </div>
            </div>
            <div className="recommend__person__followBtn">팔로우</div>
          </li>
        </ul>
      </section>
    );
  }
}

export default RecoPerson;
