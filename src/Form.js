import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    // Create alert
    alert(this.state.value + ', you are beautiful!');
    // Prevent default submit
    event.preventDefault();
    // Clear input
    this.setState({value: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" value={this.state.value} onChange={this.handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    );
  }
}

export default Form;
