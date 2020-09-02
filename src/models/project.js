const url = `http://localhost:3001/api/silo`

export default class ProjectModel {
  static all = async (userId) => {
    const res = await fetch(`${url}/projects`, {
      credentials: 'include'
    })
    return await res.json()
  }
  static show = async (projectId) => {
    const res = await fetch(`${url}/projects/${projectId}`)
    return await res.json()
  }

  static create = async (projectData) => {
    const res = await fetch(`${url}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(projectData)
    })
    return await res.json()
  }
}