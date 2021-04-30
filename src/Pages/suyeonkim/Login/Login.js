import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import '../styles/styles.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pw: '',
    };
  }
  handleIdInput = e => {
    const tg = e.target;
    this.setState({
      [tg.name]: tg.value,
    });
  };

  render() {
    const { id, pw } = this.state;

    return (
      <div className="login_suyeonkim">
        <div>
          <h1>Westagram</h1>
          <LoginForm id={id} pw={pw} InputFunction={this.handleIdInput} />
          <ForgotPassword />
        </div>
      </div>
    );
  }
}

export default Login;
