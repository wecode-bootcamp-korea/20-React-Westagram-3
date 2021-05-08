import React from 'react';
import './Login.scss';

class LoginWonkeunchoi extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.252:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          localStorage.setItem('accessToken', result.ACCESS_TOKEN);
          this.props.history.push('/main-wonkeunchoi');
        } else if (result.MESSAGE === 'INVALID_USER') {
          alert('회원가입을 해주세요.');
        }
      });
  };

  handleIdClick = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwClick = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    const { id, pw } = this.state;

    return (
      <main className="Login_wonkeunchoi">
        <button onClick={this.goToMain}>메인으로 이동하기 HOC</button>
        <article>
          <div className="westagram">
            <h1>Westagram</h1>
            <section>
              <form action="submit" className="loginForm">
                <label htmlFor="userid"></label>
                <input
                  type="text"
                  name="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                  id="user_id"
                  onChange={this.handleIdClick}
                />

                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="pw"
                  placeholder="비밀번호"
                  minLength="5"
                  maxLength="13"
                  required
                  id="password"
                  onChange={this.handlePwClick}
                />

                <button
                  className="btn_login"
                  onClick={this.goToMain}
                  disabled={id.includes('@') && pw.length >= 5 ? false : true}
                >
                  로그인
                </button>
              </form>
            </section>
          </div>
        </article>
      </main>
    );
  }
}
export default LoginWonkeunchoi;
