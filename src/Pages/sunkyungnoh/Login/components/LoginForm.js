import React, { useState } from 'react';
import './LoginForm.scss';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <div className="enter">
        <label htmlFor="id" className="form-description">
          전화번호, 사용자 이름 또는 이메일
        </label>
        <input
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
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
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          className="input PW"
          id="pw"
          name="pw"
          type="text"
          aria-label="비밀번호"
          minLength="1"
          required
        />
      </div>
      <button type="submit" className="login btn">
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

export default LoginForm;
