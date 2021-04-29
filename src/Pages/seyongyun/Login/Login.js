import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../Styles/seyongyun/common.scss';

class LoginSeyongyun extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-Seyongyun');
  };

  render() {
    return (
      <div className="login">
        <div className="totalBoundary">
          <h1 className="titleFont titleSize">westagram</h1>
          <div className="loginArea">
            <p>
              <input
                className="idInput"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
              />
            </p>
            <p>
              <input
                className="passwordInput"
                type="password"
                placeholder="비밀번호"
              />
            </p>
            <div className="buttonArea">
              <button className="loginButton" onClick={this.goToMain}>
                로그인
              </button>
            </div>
          </div>
          <div className="pwFind">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </div>
        <script src="js\login.js"></script>
      </div>
    );
  }
}

export default withRouter(LoginSeyongyun);
