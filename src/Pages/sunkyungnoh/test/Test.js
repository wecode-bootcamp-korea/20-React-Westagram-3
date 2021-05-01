import React from 'react';
import Test2 from './Test2';
import Pang from './Pang';
import './Test.scss';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      titleColor: false,
      subTitleColor: false,
      pangs: [
        {
          id: 1,
          name: '크루아상',
          price: '1000원',
          url:
            'https://www.paris.co.kr/wp-content/uploads/2019/11/200210_스위트몽블랑_1-1280x1280.jpg',
        },
        {
          id: 2,
          name: '식빵',
          price: '2000원',
          url:
            'https://www.paris.co.kr/wp-content/uploads/2019/11/200210_스위트몽블랑_1-1280x1280.jpg',
        },
        {
          id: 3,
          name: '피자빵',
          price: '3000원',
          url:
            'https://www.paris.co.kr/wp-content/uploads/2019/11/200210_스위트몽블랑_1-1280x1280.jpg',
        },
      ],
    };
  }

  handleClick = () => {
    const { titleColor } = this.state;
    this.setState({
      titleColor: !titleColor,
    });
  };

  handleChild = () => {
    const { subTitleColor } = this.state;
    this.setState({
      subTitleColor: !subTitleColor,
    });
  };

  render() {
    const { titleColor, subTitleColor, pangs } = this.state;
    console.log(titleColor, subTitleColor);
    return (
      <div className="parent">
        <h1 className={titleColor ? 'highlighted' : ''}>부모</h1>
        <button onClick={this.handleClick}>change P color</button>
        <div>
          {pangs.map(pang => {
            return <Pang url={pang.url} name={pang.name} price={pang.price} />;
          })}
        </div>

        <Test2 color={subTitleColor} handleChild={this.handleChild} />
      </div>
    );
  }
}

export default Test;
