import { getExpenses, getCurrencies } from '../services/index';
// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXPENSES = 'ADD_DATA_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCESS';

export const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

const requestSuccess = (currencies) => ({
  type: REQUEST_API_SUCCESS,
  payload: { currencies },
});

export const getCurrenciesApi = () => async (dispatch) => {
  const allCurrencies = await getCurrencies();
  const FilteredCurrencies = allCurrencies
    .filter((currency) => (currency !== 'USDT' && currency));
  dispatch(requestSuccess(FilteredCurrencies));
};

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: { expenses },
});

export const getExpensesApi = (state) => async (dispatch) => {
  const exchangeRates = await getExpenses();
  const newState = {
    ...state,
    exchangeRates,
  };
  dispatch(addExpenses(newState));
};

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSES,
  payload: { id },
});
