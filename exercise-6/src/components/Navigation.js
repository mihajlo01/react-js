import React from "react";
import { Link } from "react-router-dom";

export class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
      </div>
    );
  }
}
