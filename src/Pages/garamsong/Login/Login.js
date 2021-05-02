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
      Id: '',
      Pw: '',
    };
  }

  handleIdInput = e => {
    const { Id } = this.state;
    this.setState({
      Id: e.target.value,
    });
    console.log(e.target.value);
  };

  handlePwInput = e => {
    const { Pw } = this.state;
    this.setState({
      Pw: e.target.value,
    });
    console.log(e.target.value);
  };
  const;
  render() {
    const { Id, Pw } = this.state;
    const isValid = Id.includes('@') && Pw.length >= 6;
    return (
      <div className="LoginGaramsong">
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
              onChange={this.handleIdInput}
            />
            <input
              aria-label="type PW here"
              className="loginValue loginInputValue loginPassword"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={`loginValue loginBtn ${isValid ? 'btnActive' : ''}`}
              onClick={this.goToMain}
              disabled={isValid ? false : true}
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
