import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className="right_layout">
        <div className="follow_myInfo">
          <img
            src="/images/wonkeunchoi/feed_profile.jpeg"
            alt="feed_profile_img"
            id="side_profile"
          />
          <div id="myName_box">
            <p>wonkeun_Choi</p>
            <p id="myName">최원근</p>
          </div>
          <span>전환</span>
        </div>
        <div className="follow_box">
          <span id="user_recommend_font">회원님을 위한 추천</span>
          <span>모두 보기</span>
          <div className="follower_user_box">
            <ul>
              <li>
                <img
                  src="/images/wonkeunchoi/profile.jpeg"
                  alt="profile_img"
                  className="follower_img"
                />
                <div className="follwer_storage">
                  <span className="followr_nickname">HarryPotter</span>
                  <span className="follower_info">다니엘</span>
                </div>
                <button>
                  <span>팔로우</span>
                </button>
              </li>

              <li>
                <img
                  src="/images/wonkeunchoi/profile.jpeg"
                  alt="profile_img"
                  className="follower_img"
                />
                <div className="follwer_storage">
                  <span className="followr_nickname">Hermione</span>
                  <span className="follower_info">헤르미온느</span>
                </div>
                <button>
                  <span>팔로우</span>
                </button>
              </li>

              <li>
                <img
                  src="/images/wonkeunchoi/profile.jpeg"
                  alt="profile_img"
                  className="follower_img"
                />
                <div className="follwer_storage">
                  <span className="followr_nickname">Ron</span>
                  <span className="follower_info">론 위즐리</span>
                </div>
                <button>
                  <span>팔로우</span>
                </button>
              </li>
              <li>
                <img
                  src="/images/wonkeunchoi/profile.jpeg"
                  alt="profile_img"
                  className="follower_img"
                />
                <div className="follwer_storage">
                  <span className="followr_nickname">Malfoy</span>
                  <span className="follower_info">말포이</span>
                </div>
                <button>
                  <span>팔로우</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
