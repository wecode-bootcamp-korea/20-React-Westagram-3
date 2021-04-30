import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import '../styles/styles.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreate = data => {
      console.log(data);
    };
  }

  render() {
    return (
      <div className="login_suyeonkim">
        <div>
          <h1>Westagram</h1>
          <LoginForm onCreate={this.handleCreate} />
          <ForgotPassword />
        </div>
      </div>
    );
  }
}

export default Login;
