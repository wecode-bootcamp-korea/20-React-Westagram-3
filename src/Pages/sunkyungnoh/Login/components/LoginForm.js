import React from 'react';
import { withRouter } from 'react-router-dom';
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
    this.setState({
      [name]: value,
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.history.push('/Main-sunkyungnoh');
  };

  // submit = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.6.172:8000/user/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.username,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       if (result.message.toLowerCase() === 'success') {
  //         localStorage.setItem('token', result.token);
  //         this.props.history.push('/Main-sunkyungnoh');
  //       } else {
  //         alert('비밀번호를 다시 확인해주세요');
  //       }
  //     });
  // };

  render() {
    const { username, password } = this.state;
    const isValid = username.includes('@') && password.length >= 6;

    return (
      <form
        onSubmit={this.submit}
        onChange={this.handleInput}
        className="loginForm"
      >
        <div className="enter">
          <label className={`form-description ${username ? 'focused' : ''}`}>
            전화번호, 사용자 이름 또는 이메일
            <input
              value={username}
              className={`input pw ${username ? 'entered' : ''}`}
              type="text"
              aria-label="전화번호, 사용자 이름 또는 이메일"
              name="username"
              required
            />
          </label>
        </div>
        <div className="enter">
          <label className={`form-description ${password ? 'focused' : ''}`}>
            비밀번호
            <input
              value={password}
              className={`input pw ${password ? 'entered' : ''}`}
              name="password"
              type="password"
              aria-label="비밀번호"
              required
            />
          </label>
        </div>
        <button
          className={`login btn ${isValid ? 'active' : ''}`}
          disabled={!isValid}
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

export default withRouter(LoginForm);
