
import React, { Component, Link } from "react";
import igLogo from "../pictures/igLogo.png";


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

  igLink() {
    window.location = "www.google.com"
  }

  render() {
    return (

      <div className="content"><h1 className="contentHeader">Contact</h1> 

      <div>
        <p>Message me on Instagram!</p>
        <a href="https://www.instagram.com/a.j.mckinnon/" >
        <img src={igLogo}></img>
        </a>
      </div>
      
    </div>

    );
  }

}
  export default Contact







