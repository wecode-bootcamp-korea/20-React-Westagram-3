import React from 'react';
import './FeedsBtn.scss';

class FeedsBtn extends React.Component {
  render() {
    return (
      <div className="feed__btn">
        <div className="feed__btn__interact">
          <button className="feed__btn__like">
            <img alt="heart__Button" src="/images/suyeonkim/heart.png" />
          </button>
          <button className="feed__btn__comment">
            <img alt="comment__button" src="/images/suyeonkim/comment.jpg" />
          </button>
          <button className="feed__btn__upload">
            <img alt="dm__button" src="/images/suyeonkim/dm.png" />
          </button>
        </div>
        <div className="feed__btn__marker">
          <img alt="bookmark__button" src="/images/suyeonkim/bookMark.png" />
        </div>
      </div>
    );
  }
}

export default FeedsBtn;
