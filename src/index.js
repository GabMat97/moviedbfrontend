import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

document.body.style.background = "orange";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <tr>
        <td>{film.film_id}</td>
        <td>{film.title}</td>
        <td>{film.description}</td>
        <td>{film.release_year}</td>
        <td>{film.language_id}</td>
        <td>{film.duration}</td>
        <td>{film.rating}</td>
      </tr>
    );
  }
}

class FilmList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Film ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Release Year</th>
            <th>Language ID</th>
            <th>Duration</th>
            <th>Rating</th>         
          </tr>
        </thead>
        <tbody>{this.props.rows}</tbody>
      </table>
    );
  }
}

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
    const release_year = this.state.AddReleaseYear;
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
        release_year: release_year,
        language_id: language_id,
        duration: duration,
        rating: rating
      }),
    };

    fetch("http://localhost:8080/moviesDB/addfilm", requestOptions).then(
      (response) => response.json()
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* ID: 
          <input
            type="text"
            placeholder="Enter Film ID"
            value={this.state.AddFilmID}
            onChange={this.handleChangeFilmID}
          /> */}
          Title:
          <input
            type="text"
            placeholder="Enter Film Title"
            value={this.state.AddTitle}
            onChange={this.handleChangeTitle}
          />
          Description:
          <input
            type="text"
            placeholder="Enter Film Description"
            value={this.state.AddDescription}
            onChange={this.handleChangeDescription}
          />
          Release Year:
          <input
            type="text"
            placeholder="Enter Film Release Year"
            value={this.state.AddReleaseYear}
            onChange={this.handleChangeReleaseYear}
          />
          Language ID:
          <input
            type="text"
            placeholder="Enter Film Language ID"
            value={this.state.AddLanguageID}
            onChange={this.handleChangeLanguageID}
          />
          Duration:
          <input
            type="text"
            placeholder="Enter Film Duration"
            value={this.state.AddDuration}
            onChange={this.handleChangeDuration}
          />
          Rating:
          <input
            type="text"
            placeholder="Enter Film Rating"
            value={this.state.AddRating}
            onChange={this.handleChangeRating}
          />
          
        </label>
        <input type="submit" value="Add Film" />
      </form>
    );
  }
}

class UpdateFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UpdateFilmID: "",
      UpdateDescription: "",
    };

    this.handleUpdateFilmID = this.handleUpdateFilmID.bind(this);
    this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  

    
  }

  updateFunction() {
    const film_id = this.state.UpdateFilmID;
    const description = this.state.UpdateDescription;
    const updateOptions = {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        film_id: film_id,
        description: description,
      
      }),
    }

    fetch("http://localhost:8080/moviesDB/updatefilm/" + film_id, updateOptions)
    .then(() => this.setState({ status: "Update Description Successful" }));
  }

  handleUpdateDescription(event) {
    this.setState({
      UpdateDescription: event.target.value,
    });
  }

  handleUpdateFilmID(event) {
    this.setState({ 
      UpdateFilmID: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateFunction();
    alert("Your film's description was successfully updated");
  }

  

  render() {
    return (
      <div className="text-center">
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>
            <input
              type="text"
              placeholder="Enter Film ID"
              value={this.state.UpdateFilmID}
              onChange={this.handleUpdateFilmID}
            />
            <input
              type="text"
              placeholder="Enter New Description"
              value={this.state.UpdateDescription}
              onChange={this.handleUpdateDescription}
            />
          </label>
          <input type="submit" value="Update Film" />
        </form>
      </div>
    );
  }
}

class RemoveFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DeleteFilm: "",
    };

    this.handleDeleteFilm = this.handleDeleteFilm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteFunction() {
    const film_id = this.state.DeleteFilm;

    fetch("http://localhost:8080/moviesDB/deletefilm/" + film_id, {
      method: "DELETE",
    }).then(() => this.setState({ status: "Delete Successful" }));
  }

  handleDeleteFilm(event) {
    this.setState({
      DeleteFilm: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.deleteFunction();
    alert("A Film was successfully removed: " + this.state.DeleteFilm);
  }

  render() {
    return (
      <div className="text-center">
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>
            <input
              type="text"
              placeholder="Enter Film ID"
              value={this.state.DeleteFilm}
              onChange={this.handleDeleteFilm}
            />
          </label>
          <input type="submit" value="Remove Film" />
        </form>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFiltertextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    // const filterText = this.props.filterText;
    return (
      <form
        onSubmit={(e) => {
          this.props.handleClick(e);
        }}
      >
        <input
          type="text"
          placeholder="Search Film by Title"
          value={this.props.filterText}
          onChange={this.handleFiltertextChange}
        />
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}

class FilmDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      movies: [],
      rows: [],
    };
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/moviesDB/movies")
      .then((response) => response.json())
      .then((jsonData) => {
        const filminfo = jsonData;
        this.setState({
          movies: filminfo,
          rows: filminfo,
        });
      });
  }

  handleFiltertextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleClick(event) {
    alert("Search Result: " + this.state.filterText);
    event.preventDefault();
    const filterText = this.state.filterText;

    const rows = [];
    const movies = this.state.movies;

    movies.forEach((film) => {
      if (film.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      rows.push(film);
    });
    this.setState({
      rows: rows,
    });
  }
  render() {
    const renderRows = [];
    this.state.rows.forEach((film) => {
      renderRows.push(<FilmItem film={film} key={film.film_id} />);
    });
    return (
      <div>
        <div>
          <h1>Film Database</h1>
          <img src="https://c.tenor.com/J_6Rv7jZ5K4AAAAC/cinema-321.gif" />
          <div />
          <div className="Header">
            <h2>Search for Film</h2>
          </div>
          <div className="SearchBar">
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFiltertextChange}
              onFilterTextSubmit={this.handleSubmit}
              handleClick={this.handleClick}
            />
          </div>
          <br />
          <div className="FilmEntry">
            <h2>Add Film to Database</h2>
            <FilmEntry />
          </div>
          <br />
          <div>
            <h2>Update Film Description </h2>
          </div>
          <div>
            <UpdateFilm className="UpdateFilm" />
          </div>
          <div>
            <h2>Remove Film from Database </h2>
          </div>
          <div>
            <RemoveFilm className="RemoveFilm" />
          </div>
          <div>
            <h2>Film Results</h2>
          </div>
          <div className="FilmDatabase">
            <FilmList
              movies={this.state.movies}
              filterText={this.state.filterText}
              rows={renderRows}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FilmDatabase />, document.getElementById("root"));
