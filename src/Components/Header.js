import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { email, total } = this.props;
    const { currency } = this.state;

    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="header-currency-field">{currency}</span>
        <span data-testid="total-field">
          { total.reduce((acc, curr) => acc + curr, 0).toFixed(2) }
        </span>
      </header>
    );
  }
}

Header.defaultProps = {
  total: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.arrayOf(Number),
};

export default connect(mapStateToProps)(Header);
