import React, { Component } from 'react';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>Are you beautiful? Enter your name and find out.</p>
        <Form />
      </div>
    );
  }
}

export default App;
