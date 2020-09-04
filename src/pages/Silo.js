import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ProjectModel from '../models/project';
import ProjectCard from '../components/js/ProjectCard'
import NewProject from './NewProject';

class Silo extends Component {
  state= {
    projects: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    if (this.props.currentUser) {
      ProjectModel.all(this.props.currentUser._id)
      .then(data => {
        this.setState({ projects: data })
      })
    }
  }

render() {
  if (!this.props.currentUser) {
    return <Redirect to = '/login' />
  }
  const projectList = this.state.projects.map(project => {
    return <ProjectCard project={ project } key={ project._id } />
  })
  return (
    <>
      <h1>Project Silo</h1>
        { projectList }
      <div>
        <NewProject user={ this.props.currentUser }/>
      </div>
    </>
    )
  }
}

export default Silo;
