import React from "react";
import { Input } from "./Input";

export class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      showTable: false,
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  toggleVisibility = () => {
    this.setState({
      showTable: !this.state.showTable,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div id="form">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <Input
              type="text"
              name="username"
              onChange={this.inputChangeHandler}
              imeLabela="Username"
            />
            <Input
              type="password"
              name="password"
              onChange={this.inputChangeHandler}
              imeLabela="Password"
            />
            <a href="https://semosedu.com.mk/Default.aspx">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    );
  }
}
