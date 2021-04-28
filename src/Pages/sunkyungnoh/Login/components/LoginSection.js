import React from 'react';
import LoginForm from './LoginForm';
// import './LoginSection.scss';

class LoginSection extends React.Component {
  render() {
    return (
      <div className="loginSection">
        <h1>Westagram</h1>
        <LoginForm />
        <a href="https://www.instagram.com/" className="forgotPW">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default LoginSection;
