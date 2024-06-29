// src/redux/actions/authActions.js
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (err) {
    console.error(err);
    // handle error
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (err) {
    console.error(err);
    // handle error
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
