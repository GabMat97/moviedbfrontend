import React from "react";

class UpdateFilm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        UpdateFilmID: this.props.film_id,
        UpdateDescription: "",
      };
      this.handleUpdateFilmID = this.handleUpdateFilmID.bind(this);
      this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateFunction() {
      const film_id = this.props.film.film_id;
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
  
      fetch("http://3.133.129.178:8080/moviesDB/updatefilm/" + film_id + "/?description=" + description, updateOptions)
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
        <div >
          <textarea
            type="text"
            placeholder="Enter New Description"
            value={this.state.UpdateDescription}
            onChange={this.handleUpdateDescription}
          />
            <h2
              onClick={(event) => {
                this.handleSubmit(event);
                this.props.closeModal();
                }}
              className="Title"
            >
              Update { this.props.film.title } Description
            </h2>
        </div>
      );
    }
  }

  export default UpdateFilm;