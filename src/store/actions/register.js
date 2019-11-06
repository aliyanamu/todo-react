import { API } from '../../helpers/axios'

export default function (name, email, password) {
  return function(dispatch) {
    const body = {
      name, email, password
    }
    dispatch({ type: 'AUTH_LOADING' })
    API.post('/auth/register', body)
      .then((result) => {
        localStorage.setItem('token', result.data.data.token)
        dispatch({
          type: 'REGISTER_SUCCESS',
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