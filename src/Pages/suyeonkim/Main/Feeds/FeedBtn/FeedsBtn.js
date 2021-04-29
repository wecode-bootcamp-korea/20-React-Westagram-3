import React from 'react';
import './FeedsBtn.scss';

class FeedsBtn extends React.Component {
  render() {
    return (
      <div className="feed__btn">
        <div className="feed__btn__interact">
          <button className="feed__btn__like">
            <i className="far fa-heart"></i>
          </button>
          <button className="feed__btn__comment">
            <i className="far fa-comment"></i>
          </button>
          <button className="feed__btn__upload">
            <i className="far fa-share-square"></i>
          </button>
        </div>
        <div className="feed__btn__marker">
          <i className="far fa-bookmark"></i>
        </div>
      </div>
    );
  }
}

export default FeedsBtn;
