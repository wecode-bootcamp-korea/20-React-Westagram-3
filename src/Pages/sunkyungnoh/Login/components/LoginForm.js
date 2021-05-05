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

  handleInput = e => {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const isValid = username.includes('@') && password.length >= 6;

    return (
      <form
        onChange={this.handleInput}
        className="loginForm"
        action="/Main-sunkyungnoh"
      >
        <div className="enter">
          <label
            htmlFor="id"
            className={`form-description ${username ? 'focused' : ''}`}
          >
            전화번호, 사용자 이름 또는 이메일
          </label>
          <input
            value={username}
            className={`input pw ${username ? 'entered' : ''}`}
            type="text"
            aria-label="전화번호, 사용자 이름 또는 이메일"
            name="username"
            id="id"
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
            className={`input pw ${password ? 'entered' : ''}`}
            id="pw"
            name="password"
            type="password"
            aria-label="비밀번호"
            required
          />
        </div>
        <button
          type="submit"
          className={`login btn ${isValid ? 'active' : ''}`}
          disabled={isValid ? false : true}
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
