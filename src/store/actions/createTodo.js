import { API, config } from '../../helpers/axios'
import getTodos from './getTodos'

export default function (title, priority, note) {
  return function(dispatch) {
    const body = {
      title: title,
      priority: priority,
      note: note
    }
    dispatch({ type: 'TODO_LOADING' })
    API.post(`/todo`, body, config)
      .then((result) => {
        dispatch({
          type: 'CREATE_TODO_SUCCESS',
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