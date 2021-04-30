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
    return (
      <form className="loginForm">
        <div className="enter">
          <label htmlFor="id" className="form-description">
            전화번호, 사용자 이름 또는 이메일
          </label>
          <input
            value={this.state.username}
            onChange={this.handleIdInput}
            className="input ID"
            type="text"
            aria-label="전화번호, 사용자 이름 또는 이메일"
            name="userName"
            id="id"
            minLength="1"
            required
          />
        </div>
        <div className="enter">
          <label htmlFor="pw" className="form-description">
            {' '}
            비밀번호{' '}
          </label>
          <input
            value={this.state.password}
            onChange={this.handlePwInput}
            className="input PW"
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
          // className={
          //   this.state.username && this.state.password
          //     ? 'login btn active'
          //     : 'login btn'
          // }
          className={
            'login btn ' +
            (this.state.username && this.state.password && 'active')
          }
          disabled={this.state.username && this.state.password ? false : true}
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
