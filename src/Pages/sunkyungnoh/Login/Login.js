import React from 'react';
import LoginSection from './components/LoginSection.js';
import CreateAccount from './components/CreateAccount.js';
import Appstore from './components/Appstore.js';
import Footer from './components/Footer.js';
import './Login.scss';

class LoginSunkyungnoh extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-sunkyungnoh');
  };

  render() {
    return (
      <div className="login">
        <main>
          <LoginSection />
          <CreateAccount />
          <Appstore />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LoginSunkyungnoh;
