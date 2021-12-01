import React from "react";

// FilmList
class FilmList extends React.Component {
    render() {
      return (
        <table className="FilmDatabase">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Title</th>
              <th>Description</th>
              <th>Release Year</th>
              <th>Language</th>
              <th>Duration</th>
              <th>Rating</th>         
              <th>Actions</th>         
            </tr>
          </thead>
          <tbody>
            {this.props.rows}
          </tbody>
        </table>
      );
    }
  }

export default FilmList;
