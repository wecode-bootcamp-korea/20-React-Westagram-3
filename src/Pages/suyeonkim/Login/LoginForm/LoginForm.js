import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-suyeonkim');
  };

  state = {
    id: '',
    pw: '',
  };

  handleChangeId = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangePw = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      id: '',
      pw: '',
    });
  };

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.state.id}
          onChange={this.handleChangeId}
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={this.state.pw}
          onChange={this.handleChangePw}
          name="pw"
        />
        <button type="button" onClick={this.goToMain}>
          로그인
        </button>
        <div>{this.state.id}</div>
        <div>{this.state.pw}</div>
      </form>
    );
  }
}

// button disabled attribute추가하기

export default withRouter(LoginForm);
