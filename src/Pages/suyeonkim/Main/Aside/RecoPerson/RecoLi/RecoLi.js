import React from 'react';

class RecoLi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Recos: [
        {
          name: 'puts_officail_',
          detail: '회원을 위한 추천',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165180100_486058029230071_8234944855139302586_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MMiqlztef1oAX_LwD6h&edm=AEF8tYYAAAAA&ccb=7-4&oh=b6dd9cb236f3f9ee8f0f88930cdf6445&oe=60A2432C&_nc_sid=a9513d',
        },
        {
          name: 'Seoul_Jangsin_',
          detail: '회원을 위한 추천',
          image:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165180100_486058029230071_8234944855139302586_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MMiqlztef1oAX_LwD6h&edm=AEF8tYYAAAAA&ccb=7-4&oh=b6dd9cb236f3f9ee8f0f88930cdf6445&oe=60A2432C&_nc_sid=a9513d',
        },
      ],
    };
  }

  render() {
    const list = this.state.Recos.map((el, index) => {
      return (
        <li className="recommend__person">
          <div className="recommend__person__info">
            <img alt="person4__profile" src={el.image} />
            <div className="recommend__person__title">
              <div className="recommend__person__name">{el.name}</div>
              <div className="recommend__person__state">{el.detail}</div>
            </div>
          </div>
          <div className="recommend__person__followBtn">팔로우</div>
        </li>
      );
    });

    return <>{list}</>;
  }
}
