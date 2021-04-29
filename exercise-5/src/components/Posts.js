import React from "react";

export class Posts extends React.Component {
  render() {
    return (
      <div id="posts">
        <h2>Posts preview:</h2>
        {this.props.postsList.length > 1 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Title:</th>
                <th>Body:</th>
              </tr>
            </thead>
            <tbody>
              {this.props.postsList.map((post, i) => {
                return (
                  <tr key={i}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
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
