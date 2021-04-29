import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div>
            <div id="top_box">
              <div id="title">
                <h1>Instagram</h1>
              </div>
              <form action="submit">
                <input type="text" id="search" />
                <div className="search_box">
                  <span>
                    <i className="fas fa-search"></i>
                  </span>
                  <span className="">검색</span>
                </div>
              </form>
              <div className="right_wrapper">
                <div className="images">
                  <img
                    src="/images/wonkeunchoi/home.png"
                    alt="home_image"
                    className="emoji"
                  />
                  <img
                    src="/images/wonkeunchoi/dm.png"
                    alt="dm_image"
                    className="emoji"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    alt=""
                    className="emoji"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt=""
                    className="emoji"
                  />
                  <img
                    src="/images/wonkeunchoi/profile.jpeg"
                    alt="profile_image"
                    id="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
