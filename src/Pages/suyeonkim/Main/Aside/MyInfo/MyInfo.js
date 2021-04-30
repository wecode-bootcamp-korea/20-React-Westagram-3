import React from 'react';
import './MyInfo.scss';

class MyInformation extends React.Component {
  render() {
    const { MyInfo } = this.props;

    return (
      <section className="aside__myInfo">
        <img
          alt="my__profile"
          src={MyInfo.image}
          className="aside__my-avator"
        />
        <div className="aside__myNames">
          <div className="aside__myNickname">{MyInfo.nickName}</div>
          <div className="aside__myRealname">{MyInfo.realName}</div>
        </div>
      </section>
    );
  }
}

export default MyInformation;
