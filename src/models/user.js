const REACT_APP_API_URL = "http://localhost:3001/api/silo"

export default class UserModel {
  static async create(data) {
    const res = await fetch(`${ REACT_APP_API_URL }/silo/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    return await res.json()
  }

  static async login(credentials) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(credentials)
    }
    const res = await fetch(`${ REACT_APP_API_URL }/auth/login`, options)
    return await res.json()
  }

  static async logout() {
    console.log("you're loggin out...")
    const res = await fetch(`${ REACT_APP_API_URL }/auth/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
    return await res.json()
  }
}
