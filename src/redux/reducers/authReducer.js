// src/redux/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  