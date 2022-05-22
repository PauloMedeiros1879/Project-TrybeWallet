import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  update = () => {
    const { expenses } = this.props;
    let totalSum = 0;
    expenses.forEach((item) => {
      totalSum += Number(item.value) * Number(item.exchangeRates[item.currency].ask);
    });
    return totalSum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>Trybe</h1>
        <h2>Wallet</h2>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {`${this.update().replace(',')}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  totalValue: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
