import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-suyeonkim');
  };

  render() {
    const { id, pw, setValueInState } = this.props;
    const changeValue = id.includes('@') && pw.length > 5;

    return (
      <form className="loginForm" onSubmit={setValueInState}>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={setValueInState}
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={setValueInState}
          name="pw"
        />
        <button type="button" onClick={this.goToMain} disabled={!changeValue}>
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
