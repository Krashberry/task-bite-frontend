const url = `http://localhost:3001/api/silo`

export default class TaskModel {
  static all = () => {
    return fetch(`${url}/tasks`).then(res => res.json())
  }
  static show = (taskId) => {
    return fetch(`${url}/tasks/${taskId}`).then(res => res.json())
  }

  static create = (taskData) => {
    return fetch(`${url}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  
      },
      body: JSON.stringify(taskData)
    })
    .then(res => res.json())
  }
}
