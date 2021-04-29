import React from "react";

export class Input extends React.Component {
  render() {
    return (
      <div className="user-box">
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
        ></input>
        <label>{this.props.imeLabela}</label>
      </div>
    );
  }
}
