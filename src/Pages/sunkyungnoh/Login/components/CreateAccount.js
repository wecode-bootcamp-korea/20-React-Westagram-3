import React from 'react';
// import './CreateAccount.scss';

class CreateAccount extends React.Component {
  render() {
    return (
      <div className="create-account">
        <p>
          계정이 없으신가요?
          <a href="https://www.instagram.com/">
            <span>가입하기</span>
          </a>
        </p>
      </div>
    );
  }
}

export default CreateAccount;
