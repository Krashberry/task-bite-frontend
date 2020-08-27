const url = `http://localhost:3001/api/silo`

export default class ProjectModel {
  //allows us to call methods without an isntance of the class
  static all = () => {

    return fetch(`${url}/projects`).then(res => res.json())
    .then(data => this.setState({ projects: data.projects }))
  }
}