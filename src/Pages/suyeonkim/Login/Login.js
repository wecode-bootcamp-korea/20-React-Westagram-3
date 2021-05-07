import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';
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
    const { name, value } = e.target;
    e.preventDefault();

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pw } = this.state;

    return (
      <div className="login_suyeonkim">
        <div>
          <h1>Westagram</h1>
          <LoginForm id={id} pw={pw} setValueInState={this.handleIdInput} />
          <ForgotPassword />
        </div>
      </div>
    );
  }
}

export default Login;
