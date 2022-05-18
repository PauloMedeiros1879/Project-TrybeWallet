// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const USER = 'USER';

export const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const userAction = (payload) => ({
  type: USER,
  payload,
});
