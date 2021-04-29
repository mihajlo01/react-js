import React from "react";

export class About extends React.Component {
  constructor(props) {
    super();
    this.state = {
      studentid: "",
      city: "",
      dob: "",
      gpa: 0,
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onFormSubmit = () => {
    alert(`Student ID: ${this.state.studentid}
      \nCity: ${this.state.city}
      \nDate Of Birth: ${this.state.dob}
      \nG.P.A.: ${this.state.gpa}`);
  };
  render() {
    return (
      <div id="about">
        <hr />
        <form onSubmit={this.onFormSubmit}>
          <label>StudentID:</label>
          <input
            type="text"
            name="studentid"
            onChange={this.inputChangeHandler}
          />
          <br />
          <br />
          <label>City:</label>
          <input type="text" name="city" onChange={this.inputChangeHandler} />
          <br />
          <br />
          <label>DOB:</label>
          <input type="date" name="dob" onChange={this.inputChangeHandler} />
          <br />
          <br />
          <label>G.P.A:</label>
          <input
            type="number"
            step=".1"
            name="gpa"
            onChange={this.inputChangeHandler}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
