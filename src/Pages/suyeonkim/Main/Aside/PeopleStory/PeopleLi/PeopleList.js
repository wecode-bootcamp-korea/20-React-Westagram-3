import React from 'react';

class PeopleList extends React.Component {
  render() {
    const { infos } = this.props;

    const list = infos.map(el => {
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

export default PeopleList;
