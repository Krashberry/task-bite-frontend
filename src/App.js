import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/js/Header'
import Footer from './components/js/Footer'
import Routes from './config/routes'
import UserModel from './models/user'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer /> 
    </div>
  );
}

export default App;
