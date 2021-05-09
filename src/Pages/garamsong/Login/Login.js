import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  goToMain = e => {
    e.preventDefault();
    //회원가입
    const API = 'http://10.58.1.21:8000/users/signin';
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          // save localstroage
          localStorage.setItem('TOKEN', res['ACCESS TOKEN']);
          // push to main
          this.props.history.push('/Main-garamsong');
        } else {
          alert('로그인하세요');
        }
      });
  };
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
          <form
            className="loginInputContainer"
            action="/Main-garamsong"
            onSubmit={this.goToMain}
          >
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
            <button>비밀번호를 잊으셨나요?</button>
          </p>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
