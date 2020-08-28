import React, { Component } from 'react';
import ProjectModel from '../models/project';
import { Link } from 'react-router-dom'
import ProjectCard from '../components/js/ProjectCard'
// BUG: ask about React not wanting to go out into the Back End
// import User from '../../../back-end/models/user';

class Silo extends Component {
  state= {
    projects: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData= () => {
    ProjectModel.all()
    .then(data => this.setState({ projects: data.projects }))
  }

  render() {
    let Silo = this.state.projects.map((project, index) => {
      return (
        <Link to={`/projects/${ project._id }`} key={index}>
          <ProjectCard  {...project} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All Projects</h1>
        { this.state.projects ? Silo : 'Loading...' }
      </div>
    );
  }
}

export default Silo;
