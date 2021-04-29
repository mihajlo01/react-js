import React from "react";
import { Link } from "react-router-dom";

export class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
        <ul>
          <li>
            <Link to="/">Go to Home Page</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
      </div>
    );
  }
}
