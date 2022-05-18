// Esse reducer será responsável por tratar as informações da pessoa usuária
import { userLogin } from '../actions/index';

const INITIAL_STATE = ({
  email: 'alguem@email.com',
});

export default function reduceUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userLogin:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
