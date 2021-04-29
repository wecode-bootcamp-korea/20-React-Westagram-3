import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <article className="left_layout">
        <div className="feed_title">
          <img
            alt="profile_small_image"
            src="/images/wonkeunchoi/profile.jpeg"
            className="profile_small_img"
          />
          <div className="nickname">
            <span>old_popSensors</span>
            <img
              src="/images/wonkeunchoi/dot.png"
              alt="dot_image"
              id="dot_image"
            />
          </div>
        </div>
        <div className="profile_box">
          <img
            src="/images/wonkeunchoi/feed_profile.jpeg"
            alt="feed_profile"
            className="feed_image"
          />
          <div className="post_box">
            <div className="post_icon">
              <button>
                <img
                  src="/images/wonkeunchoi/redheart.png"
                  alt="red_heart"
                  className="emoji"
                />
              </button>
              <button>
                <img
                  src="/images/wonkeunchoi/comment.jpg"
                  alt="comment_image"
                  className="emoji"
                />
              </button>
              <button>
                <img
                  src="/images/wonkeunchoi/dm.png"
                  alt="dm_image"
                  className="emoji"
                />
              </button>
            </div>
            <div className="post">
              <p>
                오늘의 날씨에 너라는 날씨가 찾아왔다, 눈이 부셨다 눈이 멀었다
                앞이 안보인다 그만큼 너는 아름답기에..
              </p>
              <span>#안과</span>
              <span>#실명</span>
              <span>#아무고토_안보이지롱</span>
            </div>
            <div className="comment_storage">
              <div>
                <span className="comment_User"></span>
                <span className="comment_Msg"></span>
              </div>
            </div>
            <div className="type_comment">
              <input
                type="text"
                placeholder="댓글 달기.."
                id="messageInputBox"
              />
              <span>
                <button type="submit" id="comment_btn">
                  게시
                </button>
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
