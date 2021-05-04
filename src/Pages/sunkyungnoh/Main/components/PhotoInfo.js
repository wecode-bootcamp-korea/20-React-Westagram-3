import React from 'react';

class PhotoInfo extends React.Component {
  render() {
    const { desc, userId } = this.props;
    return (
      <div className="photoInfo">
        <p className="userID">{userId}</p>
        <p>{desc}</p>
      </div>
    );
  }
}

export default PhotoInfo;
