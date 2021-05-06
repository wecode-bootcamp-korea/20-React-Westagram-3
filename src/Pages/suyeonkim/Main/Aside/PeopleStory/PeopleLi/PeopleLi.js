import React from 'react';

class PeopleLi extends React.Component {
  render() {
    const { Infos } = this.props;

    const list = Infos.map(el => {
      return (
        <li className="people__story__person" key={el.id}>
          <img alt="person__profile" src={el.image} />
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
