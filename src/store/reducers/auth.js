let localToken = localStorage.getItem('token')

let defaultState = {
  token: localToken,
  isLogin: localToken ? true : false,
  loading: false,
  error: false,
  alertMessage: ''
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLogin: true,
        token: action.payload,
        loading: false,
        error: false,
        alertMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        token: action.payload,
        loading: false,
        error: false,
        alertMessage: ''
      }
    case 'REFRESH' :
      return {
        ...state,
        token: action.payload,
        isLogin: action.payload ? true : false
      }
    case 'AUTH_LOADING' :
      return {
        ...state,
        loading: true
      }
    case 'AUTH_ERROR' :
      return {
        ...state,
        error: true,
        alertMessage: action.payload,
        loading: false
      }
    case "CLEAR_AUTH_ERROR":
      return {
        ...state,
        error: false,
        alertMessage: ''
      }
    case 'LOGOUT' :
      return {
        ...state,
        isLogin: false,
        token: null
      }
    default:
      return state;
  }
}

export default authReducer;
