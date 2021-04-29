import React from "react";

export class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fname: "",
      lname: "",
      adress: "",
      disabled: false,
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  formToggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
  render() {
    return (
      <div id="contact">
        <hr />
        <form>
          <label>First Name:</label>
          <input
            disabled={this.state.disabled ? "disabled" : ""}
            type="text"
            placeholder="Enter Your Name"
            name="fname"
            onChange={this.inputChangeHandler}
          />
          <br />
          <br />
          <label>Last Name:</label>
          <input
            disabled={this.state.disabled ? "disabled" : ""}
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={this.inputChangeHandler}
          />
          <br />
          <br />
          <label>Adress:</label>
          <input
            disabled={this.state.disabled ? "disabled" : ""}
            type="text"
            placeholder="Enter Your Adress"
            name="adress"
            onChange={this.inputChangeHandler}
          />
        </form>
        <br />
        <button type="button" onClick={this.formToggle}>
          {this.state.disabled ? "Enable" : "Disable"}
        </button>
      </div>
    );
  }
}
