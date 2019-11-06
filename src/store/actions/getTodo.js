import { API, config } from '../../helpers/axios'

export default function (id) {
  return function(dispatch) {
    dispatch({ type: 'TODO_LOADING' })
    API.get(`/todo/${id}`, config)
      .then((result) => {
        dispatch({
          type: 'GET_SINGLE_TODO_SUCCESS',
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