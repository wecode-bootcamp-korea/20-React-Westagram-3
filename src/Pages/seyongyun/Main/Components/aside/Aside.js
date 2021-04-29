import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Aside.scss';
import '../../../../../Styles/seyongyun/common.scss';

class Aside extends React.Component {
  render() {
    return (
      <div className="aside mainRightArea">
        <div className="myProfile">
          <img
            className="profileThumnailRight"
            alt="profileThRight"
            src="/images/seyongyun/profileThumnail.png"
          />
          <div className="rightProfileId">
            <p className="rightProfileIdFont">archedemus</p>
            <p className="rightProfileIdFont">윤세용</p>
          </div>
        </div>
        <div className="rightStoryArea">
          <div className="rightStoryTitle">
            <span className="rightStoryFont">스토리</span>
            <span className="rightStoryFont">모두 보기</span>
          </div>
          <div className="rightStoryAccounts">
            <ol>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>2시간전</p>
                </div>
              </li>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>4시간전</p>
                </div>
              </li>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>8시간전</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="rightRecommendArea">
          <div className="rightStoryTitle">
            <span className="rightStoryFont">스토리</span>
            <span className="rightStoryFont">모두 보기</span>
          </div>
          <div className="rightStoryAccounts">
            <ol>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>2시간전</p>
                </div>
              </li>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>4시간전</p>
                </div>
              </li>
              <li className="rightStoryEachAccount">
                <img
                  className="rightStoryProfileThumnail"
                  alt="profile thumnail"
                  src="/images/seyongyun/profileThumnail.png"
                />
                <div>
                  <p>archedemus</p>
                  <p>8시간전</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Aside);
