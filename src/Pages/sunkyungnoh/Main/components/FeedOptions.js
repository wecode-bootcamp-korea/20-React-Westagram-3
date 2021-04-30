import React from 'react';
import './FeedOptions.scss';

class FeedOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
    };
  }

  addLike = () => {
    const { like } = this.state;

    this.setState({
      like: like + 1,
    });
  };

  render() {
    const { like } = this.state;

    return (
      <>
        <section className="feedOptions">
          <button onClick={this.addLike}>
            <img aria-label="좋아요" src="/images/sunkyungnoh/heart.png" />
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
          좋아요 &nbsp;<span>{like}</span>개
        </p>
      </>
    );
  }
}

export default FeedOptions;
