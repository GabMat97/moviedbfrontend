import React from "react";

// FilmEntry
class FilmEntry extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        AddTitle: "",
        // AddFilmID: "",
        AddDescription: "",
        AddReleaseYear: "",
        AddLanguageID: "",
        AddDuration: "",
        AddRating: ""
      };
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      // this.handleChangeFilmID = this.handleChangeFilmID.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
      this.handleChangeReleaseYear = this.handleChangeReleaseYear.bind(this);
      this.handleChangeLanguageID = this.handleChangeLanguageID.bind(this);
      this.handleChangeDuration = this.handleChangeDuration.bind(this);
      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleChangeFilmID(event) {
    //   this.setState({ AddFilmID: event.target.value });
    // }
    handleChangeTitle(event) {
      this.setState({ AddTitle: event.target.value });
    }
    handleChangeDescription(event) {
      this.setState({ AddDescription: event.target.value });
    }
    handleChangeReleaseYear(event) {
      this.setState({ AddReleaseYear: event.target.value });
    }
    handleChangeLanguageID(event) {
      this.setState({ AddLanguageID: event.target.value });
    }
    handleChangeDuration(event) {
      this.setState({ AddDuration: event.target.value });
    }
    handleChangeRating(event) {
      this.setState({ AddRating: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      alert("A Film was successfully added: " + this.state.AddTitle);
  
      // const film_id = this.state.AddFilmID;
      
      const title = this.state.AddTitle;
      const description = this.state.AddDescription;
      const release_yr = this.state.AddReleaseYear;
      const language_id = this.state.AddLanguageID;
      const duration = this.state.AddDuration;
      const rating = this.state.AddRating;
      
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // film_id: film_id,
          title: title,
          description: description,
          release_yr: release_yr,
          language_id: language_id,
          duration: duration,
          rating: rating
        }),
      };
  
      fetch("localhost:8080/moviesDB/addfilm", requestOptions).then(
        (response) => response.json()
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="rowItem">
                  Add a Film
                </td>
                <td className="rowItem">
                  <input
                    type="text"
                    placeholder="Enter Film Title"
                    value={this.state.AddTitle}
                    onChange={this.handleChangeTitle}
                  />
                </td>
                <td className="rowItem">
                  <input
                    type='text'
                    placeholder="Enter Film Description"
                    value={this.state.AddDescription}
                    onChange={this.handleChangeDescription}
                  />
                </td>
                <td className="rowItem">
                  <input
                    className="rowItem"
                    type="text"
                    placeholder="Enter Film Release Year"
                    value={this.state.AddReleaseYear}
                    onChange={this.handleChangeReleaseYear}
                    />
                </td>
                <td className="rowItem">
                  <input
                    className="rowItem"
                    type="text"
                    placeholder="Enter Film Language ID"
                    value={this.state.AddLanguageID}
                    onChange={this.handleChangeLanguageID}
                  />
                </td>
                <td className="rowItem">
                  <input
                    className="rowItem"
                    type="text"
                    placeholder="Enter Film Duration"
                    value={this.state.AddDuration}
                    onChange={this.handleChangeDuration}
                  />
                </td>
                <td className="rowItem">
                <input
                  type="text"
                  className="rowItem"
                  placeholder="Enter Film Rating"
                  value={this.state.AddRating}
                  onChange={this.handleChangeRating}
                  />
                </td>
                <td className="rowItem">
                  <input type="submit" value="Add Film" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      );
    }
  }

  export default FilmEntry