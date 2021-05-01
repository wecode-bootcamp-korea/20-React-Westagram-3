import React from 'react';

class Test2 extends React.Component {
  render() {
    const { color, handleChild } = this.props;
    return (
      <div className="child">
        <h2 className={color ? 'highlighted' : ''}>자식</h2>
        <button onClick={handleChild}>change C color</button>
      </div>
    );
  }
}

export default Test2;
