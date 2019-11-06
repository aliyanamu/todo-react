import { API, config } from '../../helpers/axios'
import getTodos from './getTodos'

export default function (id, title, priority, note, isDone = false) {
  return function(dispatch) {
    const body = {
      title: title,
      priority: priority,
      note: note,
      isDone: isDone
    }
    dispatch({ type: 'TODO_LOADING' })
    API.put(`/todo/${id}`, body, config)
      .then((result) => {
        dispatch({
          type: 'EDIT_TODO_SUCCESS',
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