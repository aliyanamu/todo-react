import { API } from '../../helpers/axios'

export default function (email, password) {
  return function(dispatch) {
    const body = {
      email, password
    }
    dispatch({ type: 'AUTH_LOADING' })
    API.post('/auth/login', body)
      .then((result) => {
        localStorage.setItem('token', result.data.data.token)
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: result.data.data.token
        })
      })
      .catch((error) => {
        dispatch({
          type: 'AUTH_ERROR',
          payload: error.message
        })
        setTimeout(() => {
          dispatch({ type: 'CLEAR_AUTH_ERROR' })
        }, 2000)
      })
  }
}