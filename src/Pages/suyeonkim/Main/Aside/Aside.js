import React from 'react';
import MyInformation from './MyInfo/MyInfo';
import PeopleStory from './PeopleStory/PeopleStory';
import RecoPerson from './RecoPerson/RecoPerson';
import Footer from './Footer/Footer';
import './Aside.scss';

class Aside extends React.Component {
  constructor() {
    super();

    this.state = {
      MyInfo: {
        realName: 'Suyeon',
        nickName: 'syeon_',
        image:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e',
      },
      StoryInfo: [
        {
          name: 'daybeat_',
          time: '7분 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
        {
          name: 'syeon_',
          time: '77분 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
        {
          name: 'wecode',
          time: '하루 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
      ],
      RecoPeople: [
        {
          name: 'put_official_',
          detail: '회원을 위한 추천',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
        {
          name: 'Recomend me',
          detial: '나를 팔로우해줭 힝',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
      ],
    };
  }

  render() {
    const { StoryInfo, RecoPeople, MyInfo } = this.state;
    return (
      <aside className="aside__links">
        <MyInformation MyInfo={MyInfo} />
        <PeopleStory StoryInfo={StoryInfo} />
        <RecoPerson RecoPeople={RecoPeople} />
        <Footer />
      </aside>
    );
  }
}

export default Aside;
