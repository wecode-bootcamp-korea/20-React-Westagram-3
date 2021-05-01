import React from 'react';

class Pang extends React.Component {
  render() {
    const { url, name, price } = this.props;
    return (
      <>
        <img src={url} alt="빵" />
        <div>{name}</div>
        <div>{price}</div>
      </>
    );
  }
}

export default Pang;
