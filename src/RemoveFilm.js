import React from "react";

// RemoveFilm
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
    const film_id = this.props.film.film_id;

    fetch("http://3.133.129.178:8080/moviesDB/deletefilm/" + film_id, {
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
      <h2 className="Title Cancel"
        onClick={(event) => {
          this.handleSubmit(event);
        }}
      >
        Remove Film
      </h2>
    );
  }
}

export default RemoveFilm;