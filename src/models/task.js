const url = `http://localhost:3001/api/silo`

export default class TaskModel {
  static all = async () => {
    const res = await fetch(`${url}/tasks`)
    return await res.json()
  }
  static show = async (taskId) => {
    const res = await fetch(`${url}/tasks/${taskId}`)
    return await res.json()
  }

  static create = async (taskData) => {
    const res = await fetch(`${url}/tasks/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    })
    return await res.json()
  }
}
