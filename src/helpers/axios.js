import axios from 'axios'
import jwt from 'jsonwebtoken'

export const token = localStorage.getItem('token')
export const decodeToken = jwt.decode(token)
export const config = {
  headers: {
    Authorization: token
  }
}
export const API = axios.create({
  baseURL: `https://pomonatodo.herokuapp.com`
});
