import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  // goToMain = () => {
  //   this.props.history.push('./Main-garamsong');
  // };
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pw } = this.state;
    const isValid = id.includes('@') && pw.length >= 6;
    return (
      <div className="loginGaramsong">
        <section className="loginContainer">
          <div className="loginLogoContainer">
            <h1 className="loginLogo">Westagram</h1>
          </div>
          <form className="loginInputContainer" action="/Main-garamsong">
            <input
              aria-label="type ID here"
              className="loginValue loginInputValue loginId"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              onChange={this.handleInput}
              name="id"
            />
            <input
              aria-label="type PW here"
              className="loginValue loginInputValue loginPassword"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              name="pw"
            />
            <button
              className={`loginValue loginBtn ${isValid ? 'btnActive' : ''}`}
              disabled={!isValid}
            >
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
