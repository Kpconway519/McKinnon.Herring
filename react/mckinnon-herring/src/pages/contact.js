
import React, { Component } from "react";


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert(`Message Submitted: \n Email: ${this.state.email}\n Subject: ${this.state.subject}\n Message: ${this.state.message}`);


    event.preventDefault();
  }

  render() {
    return (

      <div className="content"><h1 className="contentHeader">Contact</h1> 
      
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Email:</p>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <p>
            Subject:
          </p>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
          <p>
            Message:
          </p>
          <textarea className="emailText" type="text" name="message" value={this.state.message} onChange={this.handleChange} />
        </label>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
      </div>
    );
  }

}
  export default Contact







