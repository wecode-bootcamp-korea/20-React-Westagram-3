import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-suyeonkim');
  };

  render() {
    const { id, pw, InputFunction } = this.props;

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
        <button
          type="button"
          onClick={this.goToMain}
          disabled={id.includes('@') && pw.length > 5 ? false : true}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
