export default function () {
  return {
    type: 'REFRESH',
    payload: localStorage.getItem('token')
  }
}