// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUCESS_REQUEST':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'REQUEST':
    return {
      ...state,
    };
  case 'SUCESS_REQUEST_SAVE_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, ...action.expense],
    };
  case 'DELETE_AND_UPDATE_EXPENSE':
    return {
      ...state,
      expenses: [...action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
