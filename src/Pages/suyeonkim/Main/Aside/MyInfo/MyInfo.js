import React from 'react';
import './MyInfo.scss';

class MyInformation extends React.Component {
  render() {
    const { myInfo } = this.props;

    return (
      <section className="aside__myInfo">
        <img
          alt="my__profile"
          src={myInfo.image}
          className="aside__my-avator"
        />
        <div className="aside__myNames">
          <div className="aside__myNickname">{myInfo.nickName}</div>
          <div className="aside__myRealname">{myInfo.realName}</div>
        </div>
      </section>
    );
  }
}

export default MyInformation;
