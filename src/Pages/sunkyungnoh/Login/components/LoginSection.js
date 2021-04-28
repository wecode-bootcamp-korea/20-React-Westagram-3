import React from 'react';
import LoginForm from './LoginForm';
import './LoginSection.scss';

class LoginSection extends React.Component {
  render() {
    return (
      <div className="login">
        <h1>Westagram</h1>
        <LoginForm />
        <a href="" className="forgotPW">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default LoginSection;
