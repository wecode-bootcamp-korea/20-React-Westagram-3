import React from 'react';
import './FeedOptions.scss';

class FeedOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
    };
  }

  addLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
    }));
  };

  render() {
    const { like } = this.state;

    return (
      <>
        <section className="feedOptions">
          <button onClick={this.addLike}>
            <img
              className={like ? 'liked' : ''}
              aria-label="좋아요"
              src="/images/sunkyungnoh/heart.png"
            />
          </button>
          <button>
            <img aria-label="direct" src="/images/sunkyungnoh/dm.png" />
          </button>
          <button>
            <img
              aria-label="저장"
              src="/images/sunkyungnoh/save_the_post.png"
            />
          </button>
        </section>
        <p className="numOfLikes">
          좋아요 &nbsp;<span>{like ? 1 : 0}</span>개
        </p>
      </>
    );
  }
}

export default FeedOptions;
