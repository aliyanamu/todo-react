let defaultState = {
  items: [],
  item: '',
  loading: false,
  error: '',
  alertMessage: ''
}

function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_TODO_SUCCESS":
      return {
        ...state,
        items: action.payload
      }
    case "GET_SINGLE_TODO_SUCCESS":
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case "CREATE_TODO_SUCCESS":
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case "EDIT_TODO_SUCCESS":
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case 'TODO_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'TODO_ERROR':
      return {
        ...state,
        error: true,
        alertMessage: action.payload,
        loading: false
      }
    case "CLEAR_TODO_ERROR":
      return {
        ...state,
        error: false,
        alertMessage: ''
      }
    default:
      return state
  }
}

export default todoReducer