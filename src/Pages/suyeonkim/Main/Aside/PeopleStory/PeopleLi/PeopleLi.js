import React from 'react';

class PeopleLi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      People: [
        {
          name: 'daybeat_',
          time: '16분 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
        {
          name: 'syeon_',
          time: '32분 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
        {
          name: 'weongeun',
          time: '하루 전',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129741778_216837503231079_6685225582053225698_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OsXOshCpdBAAX_-MWzw&edm=AAeKFY8AAAAA&ccb=7-4&oh=596148d14220aba2f5bf68fa87228ad5&oe=60A318BA&_nc_sid=c982ba',
        },
      ],
    };
  }

  render() {
    const list = this.state.People.map((el, index) => {
      return (
        <li className="people__story__person" key={index}>
          <img alt="person1__profile" src={el.image} />
          <div className="person__info">
            <div className="person__nickname">{el.name}</div>
            <div className="person__online">{el.time}</div>
          </div>
        </li>
      );
    });

    return <>{list}</>;
  }
}

export default PeopleLi;
