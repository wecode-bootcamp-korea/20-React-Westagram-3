import React from 'react';
import './MyInfo.scss';

class MyInfo extends React.Component {
  render() {
    return (
      <section className="aside__myInfo">
        <img
          alt="my__profile"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e"
          className="aside__my-avator"
        />
        <div className="aside__myNames">
          <div className="aside__myNickname">syeon02</div>
          <div className="aside__myRealname">Su Yeon</div>
        </div>
      </section>
    );
  }
}

export default MyInfo;
