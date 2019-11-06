import { API, config } from '../../helpers/axios'

export default function (text = '', status = 'all', skip = 0, limit = 10) {
  return function(dispatch) {
    API.get(`/todo/user?q=${text}&filter=${status}&skip=${skip}&limit=${limit}`, config)
      .then((result) => {
        dispatch({
          type: 'GET_TODO_SUCCESS',
          payload: result.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'TODO_ERROR',
          payload: error.message
        })
        setTimeout(() => {
          dispatch({ type: 'CLEAR_TODO_ERROR' })
        }, 2000)
      })
  }
}