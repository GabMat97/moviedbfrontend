import React from "react";

class FilmItem extends React.Component {
    render() {
      // 
      const film = this.props.film;
      return (
        <tr className="row">
          <td className="rowItem">
            {film.title}
          </td>
          <td className="rowItem">
            {film.description}
          </td>
          <td className="rowItem">
            {film.release_yr}
          </td>
          <td className="rowItem">
            {film.language_id}
          </td>
          <td className="rowItem">
            {film.duration}
          </td>
          <td className="rowItem">
            {film.rating}
          </td>
          <td className="rowItem">
            <button onClick={this.props.openModal}>
              🔧
            </button>
          </td>
        </tr>
      );
    }
  }

export default FilmItem;