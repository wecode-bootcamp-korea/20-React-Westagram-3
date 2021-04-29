import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('./Main-garamsong');
  };

  render() {
    return (
      <div className="Login">
        <section className="loginContainer">
          <div className="loginLogoContainer">
            <h1 className="loginLogo">Westagram</h1>
          </div>
          <form className="loginInputContainer">
            <input
              aria-label="type ID here"
              className="loginValue loginInputValue loginId"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
            />
            <input
              aria-label="type PW here"
              className="loginValue loginInputValue loginPassword"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginValue loginBtn" onClick={this.goToMain}>
              로그인
            </button>
          </form>
          <p className="forgotPasswordText">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
