import React from 'react';
import './LoginForm.scss';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    const isValid = username.includes('@') && password.length >= 6;

    return (
      <form className="loginForm">
        <div className="enter">
          <label
            htmlFor="id"
            className={`form-description ${username ? 'focused' : ''}`}
          >
            전화번호, 사용자 이름 또는 이메일
          </label>
          <input
            value={username}
            onChange={this.handleIdInput}
            className={`input pw ${username ? 'entered' : ''}`}
            type="text"
            aria-label="전화번호, 사용자 이름 또는 이메일"
            name="userName"
            id="id"
            minLength="1"
            required
          />
        </div>
        <div className="enter">
          <label
            htmlFor="pw"
            className={`form-description ${password ? 'focused' : ''}`}
          >
            비밀번호
          </label>
          <input
            value={password}
            onChange={this.handlePwInput}
            className={`input pw ${password ? 'entered' : ''}`}
            id="pw"
            name="pw"
            type="text"
            aria-label="비밀번호"
            minLength="1"
            required
          />
        </div>
        <button
          type="submit"
          className={`login btn ${isValid ? 'active' : ''}`}
          disabled={isValid && false}
        >
          로그인
        </button>
        <div className="loginOption">
          <p>또는</p>
        </div>
        <a
          className="facebook"
          href="https://m.facebook.com/?locale2=ko_KR"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook logo" src="/images/sunkyungnoh/facebook.png" />
          <span>Facebook으로 로그인</span>
        </a>
      </form>
    );
  }
}

export default LoginForm;
