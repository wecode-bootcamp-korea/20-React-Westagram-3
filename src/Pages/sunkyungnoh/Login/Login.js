import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Login.scss';
import LoginSection from './components/LoginSection.js';
import CreateAccount from './components/CreateAccount.js';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <div className="login">
        <article>
          <LoginSection />
          <CreateAccount />
          <Link to="/main">메인으로 이동</Link>
          <button onClick={this.goToMain}>메인으로 이동</button>
        </article>
      </div>
    );
  }
}

export default withRouter(Login);
