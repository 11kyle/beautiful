import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="col-sm-7 m-auto">
          <p className="lead text-center">Are you beautiful? Enter your name and find out.</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
