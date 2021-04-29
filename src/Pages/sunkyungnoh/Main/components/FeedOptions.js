import React from 'react';
import './FeedOptions.scss';

// let [likes, addLikes] = useState(0)

// class FeedOptions extends React.Component {

//   render() {
//     return (
//       <section className="feedOptions">
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <span>{likes}</span>
//         <button
//           onClick={() => {
//             addLikes(likes + 1)
//           }}
//         >
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//       </section>
//     )
//   }
// }

class FeedOptions extends React.Component {
  render() {
    return (
      <>
        <section className="feedOptions">
          <button>
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
          좋아요 &nbsp;<span>123</span>개
        </p>
      </>
    );
  }
}

export default FeedOptions;
