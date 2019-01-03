import React, { Component } from 'react';
import Modal from './Modal.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  }
  hideModal = () => {
    this.setState({ show: false, value: '' });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    // Show modal
    this.showModal();
    // Prevent default submit
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" value={this.state.value} onChange={this.handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.state.value}, you are beautiful!</h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" onClick={this.hideModal}>Thanks!</button>
              </div>
            </div>
          </div>
          </div>
        </Modal>
      </form>
    );
  }
}

export default Form;
