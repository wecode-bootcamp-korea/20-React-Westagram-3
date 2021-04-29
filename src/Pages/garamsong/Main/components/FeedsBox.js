import React from 'react';
import './FeedsBox.scss';

class FeedsBox extends React.Component {
  render() {
    return (
      <div className="FeedsBox">
        <article className="feed">
          <header className="feedInfo">
            <div className="feedProfilePhoto">
              <img
                alt="profile"
                className="profileImgRadius"
                src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22711069_317709135365037_7962356006522978304_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=jo6OZE7d6KEAX9PfsAO&edm=AIQHJ4wAAAAA&ccb=7-4&oh=7a1c9fed4ff9e5efe53ee0bab6485dbb&oe=60A59B41&_nc_sid=7b02f1"
              />
            </div>
            <div className="feedInfoRight">
              <div className="feedInfoText">
                <p className="feedUserName">galmi.song</p>
                <p className="feedLocation">선릉역 7번출구</p>
              </div>
              <div className="moreInfo">...</div>
            </div>
          </header>
          <div className="feedPhoto">
            <img
              alt="feed photo"
              src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/136104948_4163154857046764_3738331688912679177_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=IKwOXsuj62UAX_aXzz_&edm=AP_V10EAAAAA&ccb=7-4&oh=22ea6db9600f632251b2fe2e1d81007f&oe=60A5AEB4&_nc_sid=4f375e"
            />
          </div>
          <div className="replyContainer">
            <div className="replyIcons">
              <div className="replyIconsLeft">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="replyIconsRight">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="replyCountLike">
              <img alt="profile" src="" />
              <span>username님 외num명이 좋아합니다</span>
            </div>
            <div className="feedDescription">
              <p>
                <h4>galmi.song</h4>와 과연 나는 마무리를 할 수 있을까?
              </p>
            </div>
            <p className="seeAllReply">댓글 num2개 모두 보기</p>
            <ul className="reply">
              <li className="replyValue">
                <span className="userId">galmi.song</span>
                <p className="replyText">댓글창입니다.</p>
                <button className="like">
                  <i className="far fa-heart"></i>
                </button>
              </li>
              <li className="replyValue">
                <span className="userId">galmi.song</span>
                <p className="replyText">댓글창입니다.</p>
                <button className="like">
                  <i className="far fa-heart"></i>
                </button>
              </li>
              <li className="replyValue">
                <span className="userId">galmi.song</span>
                <p className="replyText">댓글창입니다.</p>
                <button className="like">
                  <i className="far fa-heart"></i>
                </button>
              </li>
            </ul>
            <span className="date">1일 전</span>
            <form className="replyBar">
              <i className="emoji far fa-grin"></i>
              <input type="text" className="typeBar" />
              <button className="post">게시</button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

export default FeedsBox;
