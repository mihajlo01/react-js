import React from "react";

export class Albums extends React.Component {
  render() {
    return (
      <div id="albums">
        <h2>Albums preview:</h2>
        {this.props.albumsList.length > 1 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Title:</th>
              </tr>
            </thead>
            <tbody>
              {this.props.albumsList.map((album, i) => {
                return (
                  <tr key={i}>
                    <td>{album.title}</td>
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
