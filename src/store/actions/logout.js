export default function () {
  return function(dispatch) {
    localStorage.clear()
    setTimeout(() => {
      dispatch({
        type: 'LOGOUT',
        payload: null
      })
    }, 2000)
  }
}