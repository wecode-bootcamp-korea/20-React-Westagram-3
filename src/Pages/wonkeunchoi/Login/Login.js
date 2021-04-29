import React from 'react';
import './Login.scss';
//import { Link } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <main className="Login">
        {/* <button onClick={this.goToMain}>메인으로 이동하기 HOC</button> */}
        <article>
          <div className="westagram">
            <h1>Westagram</h1>

            <section>
              <form action="submit" id="loginForm" method="GET">
                <label htmlFor="userid"></label>
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                  id="user_id"
                />

                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="비밀번호"
                  minLength="5"
                  maxLength="13"
                  required
                  id="password"
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
export default Login;
// export default withRouter(Login);

// withRouter은 함수, input으로 컴포넌트를 받고
// output으로 인자로 받은 컴포넌트에 페이지 이동 기능을 추가한 컴포넌트를 반환한다.
