import React, { Component } from 'react';
import ProjectModel from '../models/project';

class Silo extends Component {
  state= {
    projects: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    ProjectModel.all(this.props.currentUser._id)
    .then(data => {
      this.setState({ projects: data })
  })
  }

render() {
  return (
    <>
      <h1>Project Silo</h1>
      { this.state.projects ? "Warning" : 'Loading...'}
    </>
    )
  }
}

export default Silo;
