import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../Styles/seyongyun/common.scss';

class LoginSeyongyun extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 'none',
      pw: 'none',
      backgroundColor: 'rgb(175, 217, 245)',
    };
  }

  goToMain = () => {
    this.props.history.push('/Main-Seyongyun');
  };

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  // 무한루프 돈다?
  // changeColor = () => {
  //   const { id, pw } = this.state;
  //   id.includes('@') && pw.length > 5
  //     ? this.setState({ backgroundColor: 'blue' })
  //     : this.setState({ backgroundColor: 'rgb(175, 217, 245)' });
  // };

  render() {
    const { id, pw } = this.state;

    return (
      <div className="login">
        <div className="totalBoundary">
          <h1 className="titleFont titleSize">westagram</h1>
          <div className="loginArea">
            <p>
              <input
                className="idInput"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
            </p>
            <p>
              <input
                className="passwordInput"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              {console.log(id, pw)}
            </p>
            <div className="buttonArea">
              <button
                className="loginButton"
                style={{
                  backgroundColor:
                    id.includes('@') && pw.length > 5
                      ? 'blue'
                      : 'rgb(175, 217, 245)',
                }}
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
          </div>
          <div className="pwFind">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </div>
        <script src="js\login.js"></script>
      </div>
    );
  }
}

export default withRouter(LoginSeyongyun);
