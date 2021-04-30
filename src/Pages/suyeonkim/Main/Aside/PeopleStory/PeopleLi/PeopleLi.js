import React from 'react';

class PeopleLi extends React.Component {
  render() {
    const { Infos } = this.props;

    const list = Infos.map((el, index) => {
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
