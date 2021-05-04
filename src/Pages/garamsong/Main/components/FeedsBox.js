import React from 'react';
import './FeedsBox.scss';
import Comment from './Comment';
import AddComments from './AddComments';
import commentData from './commentData';
import COMMENT from './commentData';

class FeedsBox extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      newComment: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  addComment = e => {
    e.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          id: 4,
          userId: 'dadadada',
          content: this.state.newComment,
          isLiked: '♡',
        },
      ],
    });
  };

  getComment = comment => {
    this.setState({ newComment: comment });
  };

  render() {
    const { commentList } = this.state;
    console.log(commentList);
    return (
      <div className="FeedsBoxGaramsong">
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
              <div className="moreInfo">
                <img
                  alt="moreInfo"
                  src="https://img1.wsimg.com/isteam/ip/643ea9c5-405a-49f4-9e0b-4aa7c13ebdfc/Dots%201.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:500,cg:true/rs=w:1536"
                />
              </div>
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
              <div className="replyIconsLeft"></div>
              <div className="replyIconsRight"></div>
            </div>
            <div className="replyCountLike">
              <img
                alt="profile"
                className="profileImgRadius"
                src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/136104948_4163154857046764_3738331688912679177_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=IKwOXsuj62UAX_aXzz_&edm=AP_V10EAAAAA&ccb=7-4&oh=22ea6db9600f632251b2fe2e1d81007f&oe=60A5AEB4&_nc_sid=4f375e"
              />
              <span>username님 외num명이 좋아합니다</span>
            </div>
            <div className="feedDescription">
              <h4>galmi.song</h4>
              <p>와 과연 나는 마무리를 할 수 있을까?</p>
            </div>
            <p className="seeAllReply">댓글 num2개 모두 보기</p>
            <ul className="reply">
              {commentList.map(el => {
                return (
                  <Comment
                    id={el.id}
                    userId={el.userId}
                    content={el.content}
                    isLiked={el.isLiked}
                  />
                );
              })}
            </ul>
            <span className="date">1일 전</span>
            <AddComments
              commentList={commentList}
              addComment={this.addComment}
              getComment={this.getComment}
            />
          </div>
        </article>
      </div>
    );
  }
}

export default FeedsBox;
