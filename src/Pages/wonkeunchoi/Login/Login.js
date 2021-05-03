import React from 'react';
import './Login.scss';
//import { Link } from 'react-router-dom';

class LoginWonkeunchoi extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '', //앞으로 바뀔 state에 글자가 추가되기 때문입니다.
      pw: '', // 초기 상태는 아무것도 쓰지 않은 공백이 맞겠죠?
      loginStatus: false,
    };
    // goToMain = () => {
    //   this.props.history.push('/main-wonkeunchoi');
  }

  // handleClick = e => {
  //   this.setState({ [e.target.name]: e.target.value }, () => {
  //     console.log(e.target);
  //     console.log(e.target.name);
  //     console.log(e.target.value);
  //   });
  // };

  handleIdClick = e => {
    this.setState(
      {
        id: e.target.value,
      },
      () => {
        console.log(e.target.value);
        console.log(this.state.id);
      }
    );
  };

  handlePwClick = e => {
    this.setState(
      {
        pw: e.target.value,
      },
      () => {
        console.log(e.target.value);
      }
    );
  };

  render() {
    //const { id, pw, loginStatus } = this.state;
    // const isEmail = id.includes('@');
    // const isPassword = pw;
    return (
      <main className="Login_wonkeunchoi">
        <button onClick={this.goToMain}>메인으로 이동하기 HOC</button>
        <article>
          <div className="westagram">
            <h1>Westagram</h1>

            <section>
              <form action="submit" id="loginForm" method="GET">
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

                <button id="btn_login" onClick={this.goToMain}>
                  로그인
                </button>
              </form>
            </section>
            {/* <Link to="#">비밀번호를 잊으셨나요?</Link> */}
          </div>
        </article>
      </main>
    );
  }
}
export default LoginWonkeunchoi;
// export default withRouter(Login);

// withRouter은 함수, input으로 컴포넌트를 받고
// output으로 인자로 받은 컴포넌트에 페이지 이동 기능을 추가한 컴포넌트를 반환한다.
