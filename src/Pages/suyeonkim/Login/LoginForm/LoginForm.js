import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.goToMain = () => {
      this.props.history.push('/Main-suyeonkim');
    };

    this.state = {
      id: '',
      pw: '',
      buttonOn: false,
    };

    this.handleSubmit = e => {
      e.preventDefault();
      this.props.onCreate(this.state);
      this.setState({
        id: '',
        pw: '',
      });
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      console.log(e.target.value)
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id || prevState.pw !== this.state.pw) {
      if (this.state.id.includes('@') && this.state.pw.length >= 5) {
        this.setState(
          {
            buttonOn: true,
          }
          // () => console.log(this.state)
        );
      } else {
        this.setState(
          {
            buttonOn: false,
          }
          // () => console.log(this.state)
        );
      }
    }
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.state.id}
          onChange={this.handleChange}
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={this.state.pw}
          onChange={this.handleChange}
          name="pw"
        />
        <button
          type="button"
          onClick={this.goToMain}
          className={this.state.buttonOn ? '' : 'disabled'}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
