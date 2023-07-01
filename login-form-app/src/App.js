import React from 'react'
import './App.css';
import LoginForm from './loginForm';
import Navbar from './nav';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginForm />
      </div>
  
    );
  }

}

