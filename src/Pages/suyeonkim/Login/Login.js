import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import '../styles/styles.scss';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <body className="login">
        <div>
          <h1>Westagram</h1>
          <LoginForm />
          <ForgotPassword />
        </div>
      </body>
    );
  }
}

export default Login;
