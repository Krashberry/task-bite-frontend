import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProjectCard from '../components/js/ProjectCard'
import User from '../../../back-end/models/user';
import ProjectModel from '../models/project';

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
    return (
      <div>
        `${ User }'s Silo'`
      </div>
    );
  }
}

export default Silo;
