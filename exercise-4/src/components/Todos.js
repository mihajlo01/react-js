import React from "react";

export class Todos extends React.Component {
  render() {
    return (
      <div id="Todos">
        <ol>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i} className={todo.done ? "marked-done" : ""}>
                <span>{todo.todo}</span>
                <input
                  type="checkbox"
                  value={todo.done}
                  checked={todo.done}
                  onChange={() => {
                    this.props.markTodoAsDone(todo);
                  }}
                ></input>
                <button
                  onClick={this.props.removeItem.bind(null, todo)}
                  className="btn"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
