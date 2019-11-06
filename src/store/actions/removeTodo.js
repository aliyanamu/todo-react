import { API, config } from '../../helpers/axios'
import getTodos from './getTodos'

export default function (id) {
  return function(dispatch) {
    dispatch({ type: 'TODO_LOADING' })
    API.delete(`/todo/${id}`, config)
      .then((result) => {
        dispatch({
          type: 'DELETE_TODO_SUCCESS',
          payload: result.data
        })
        setTimeout(() => {
          dispatch(getTodos())
        }, 500)
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