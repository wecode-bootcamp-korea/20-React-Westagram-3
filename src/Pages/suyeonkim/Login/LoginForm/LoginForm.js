import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  render() {
    const { InputFunction } = this.props;

    return (
      <form className="loginForm" onSubmit={InputFunction}>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={InputFunction}
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={InputFunction}
          name="pw"
        />
        <button type="button">로그인</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
