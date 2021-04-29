import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-suyeonkim');
  };

  render() {
    return (
      <section className="loginForm">
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="button" onClick={this.goToMain}>
          로그인
        </button>
      </section>
    );
  }
}

// button disabled attribute추가하기

export default withRouter(LoginForm);
