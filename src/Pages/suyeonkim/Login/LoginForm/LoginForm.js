import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  goToMain = () => {
    const { id, pw } = this.props;

    fetch('http://10.58.0.184:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        phonenumber: '123 - 456 - 789',
        email: id,
        nickname: 'suyeon',
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }

        if (result.MESSAGE === 'SUCCESS') {
          this.props.history.push('/Main-suyeonkim');
        } else {
          alert('You should signUp');
        }
      });
  };

  render() {
    const { id, pw, setValueInState } = this.props;
    const changeValue = id.includes('@') && pw.length > 5;

    return (
      <form className="loginForm" onSubmit={this.goToMain}>
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
        <button type="button" disabled={!changeValue}>
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
