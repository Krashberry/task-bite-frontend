const url = `http://localhost:3001/api/silo`

export default class ProjectModel {
  //allows us to call methods without an instance of the class
  static all = () => {
    return fetch(`${url}/projects`).then(res => res.json())
  }
  static show = (projectId) => {
    return fetch(`${url}/projects/${projectId}`).then(res => res.json())
  }

  static create = (projectData) => {
    return fetch(`${url}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  
      },
      body: JSON.stringify(projectData)
    })
    .then(res => res.json())
  }
}