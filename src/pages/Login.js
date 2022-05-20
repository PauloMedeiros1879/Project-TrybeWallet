import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Components/Form';

class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Trybe</h1>
        <h2>Wallet</h2>
        <Form history={ history } />
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

export default Login;
