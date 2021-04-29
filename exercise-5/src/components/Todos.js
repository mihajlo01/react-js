import React from "react";

export class Todos extends React.Component {
  render() {
    return (
      <div id="Todos">
        <h2>Todos preview:</h2>
        {this.props.todosList.length > 1 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Title:</th>
                <th>Completed:</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todosList.map((todo, i) => {
                return (
                  <tr key={i}>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}
