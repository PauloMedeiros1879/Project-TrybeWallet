import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveLoginInfo from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emailValidate = this.emailValidate.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  emailValidate(email) {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
  }

  handleClick() {
    const { history, loginInfo } = this.props;
    const { email } = this.state;
    loginInfo(email);
    history.push('/carteira');
  }

  handlePassword(password) {
    const pswLength = 6;
    return (password.length >= pswLength);
  }

  render() {
    const { email, password } = this.state;
    const emailValid = this.emailValidate(email);
    const passwordValid = this.handlePassword(password);

    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            required
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            id="password"
            name="password"
            type="password"
            required
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ !((emailValid && passwordValid)) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginInfo: (payload) => dispatch(saveLoginInfo(payload)),
});

Form.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
