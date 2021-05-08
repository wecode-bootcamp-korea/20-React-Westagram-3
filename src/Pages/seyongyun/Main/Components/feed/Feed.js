import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Feed.scss';
import '../../../../../Styles/seyongyun/common.scss';
import Comment from '../comment/Comment';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentSlot: '',
      commentIndex: 0,
    };
  }
  handleChange = e => {
    this.setState({
      commentSlot: e.target.value,
    });
  };

  commentInput = e => {
    if (e.code === 'Enter') {
      this.setState({
        commentList: [...this.state.commentList, this.state.commentSlot],
        commentIndex: this.state.commentIndex + 1,
        commentSlot: '',
      });
    }
    console.log(this.state.commentSlot);
  };

  render() {
    return (
      <div className="feed feedArea">
        <article className="articleArea">
          <div className="profileLine">
            <img
              className="profileThumnail"
              alt="profile thumnail"
              src="/images/seyongyun/profileThumnail.png"
            />
            <div>
              <p>archedemus</p>
              <p>wecode 선릉</p>
            </div>
          </div>
          <img
            className="feedImage"
            alt="feedImg"
            src="/images/seyongyun/wecodelife.jpeg"
          />
          <div className="interactionButtonArea">
            <img
              className="iconHeart iconSize"
              alt="iconHeart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="iconReply iconSize"
              alt="iconReply"
              src="/images/seyongyun/reply.png"
            />
            <img
              className="iconShare iconSize"
              alt="iconShare"
              src="/images/seyongyun/share.png"
            />
            <img
              className="iconBookmark iconSize"
              alt="iconBookmark"
              src="/images/seyongyun/bookmark.png"
            />
          </div>
          <div>
            <img
              className="recentLikeProfile"
              alt="recentLikePf"
              src="/images/seyongyun/profileThumnail.png"
            />
            <span>archedemus 님 외 150명이 좋아합니다.</span>
            <br />
          </div>
          <div>
            <span className="userId">archedemus</span>
            <span className="normalText">
              위코드에서 함께 공부해서 즐겁습니다.
            </span>
            <p className="postTimePassed">15시간</p>
          </div>
          <div className="reply">
            <input
              className="replyInput"
              type="text"
              placeholder="댓글달기..."
              value={this.state.commentSlot}
              onChange={this.handleChange}
              onKeyPress={this.commentInput}
            />
            <button className="replyButton" onClick={this.commentWrite}>
              게시
            </button>
          </div>
          <div className="replyLocation">
            <ol className="replyList">
              {this.state.commentList.map(text => (
                <Comment
                  textContainer={text}
                  indexContainer={this.state.commentIndex}
                />
              ))}
            </ol>
          </div>
        </article>
      </div>
    );
  }
}

export default withRouter(Feed);