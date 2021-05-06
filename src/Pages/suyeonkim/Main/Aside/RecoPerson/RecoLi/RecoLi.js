import React from 'react';

class RecoLi extends React.Component {
  render() {
    const { Infos } = this.props;

    const list = Infos.map(el => {
      return (
        <li className="recommend__person" key={el.id}>
          <div className="recommend__person__info">
            <img alt="person__profile" src={el.image} />
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

export default RecoLi;
