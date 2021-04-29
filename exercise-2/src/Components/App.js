import React from "react";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      age: 0,
      showTable: true,
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // showValues = () => {
  //   if (document.getElementById("table1").style.display === "none")
  //     document.getElementById("table1").style.display = "inline-block";
  //   else document.getElementById("table1").style.display = "none";
  // };
  toggleVisibility = () => {
    this.setState({
      showTable: !this.state.showTable,
    });
  };
  render() {
    return (
      <div id="app">
        <label>Name:</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.inputChangeHandler}
        ></input>
        <br />
        <br />
        <label>Surname:</label>
        <br />
        <input
          name="surname"
          type="text"
          placeholder="Enter your surname"
          value={this.state.surname}
          onChange={this.inputChangeHandler}
        ></input>
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.inputChangeHandler}
        ></input>
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={this.inputChangeHandler}
        ></input>
        <br />
        <br />
        <label>Age:</label>
        <br />
        <input
          name="age"
          type="number"
          placeholder="Enter your age"
          value={this.state.age}
          onChange={this.inputChangeHandler}
        ></input>
        <br />
        <br />
        <button type="button" onClick={this.toggleVisibility}>
          {this.state.showTable === true ? "Hide Table" : "Show Table"}
        </button>
        <br />
        <br />
        {this.state.showTable && (
          <table border="1px solid black">
            <tbody>
              <tr>
                <td>
                  <span>Name: </span>
                </td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>
                  <span>Surname: </span>
                </td>
                <td>{this.state.surname}</td>
              </tr>
              <tr>
                <td>
                  <span>Email: </span>
                </td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>
                  <span>Password: </span>
                </td>
                <td>{this.state.password}</td>
              </tr>
              <tr>
                <td>
                  <span>Age: </span>
                </td>
                <td>{this.state.age}</td>
              </tr>
            </tbody>
          </table>
        )}{" "}
      </div>
    );
  }
}
