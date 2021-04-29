import React from "react";

export function Comments(props) {
  return (
    <div id="comments">
      <hr />
      <ol>
        {props.comments.map((comment, i) => {
          return (
            <li key={i}>
              <p>
                <span>Name: </span>
                {comment.name}
              </p>
              <p>
                <span>Email: </span>
                {comment.email}
              </p>
              <p>
                <span>Comment: </span>
                {comment.body}
              </p>
              <hr />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
