//import React, { Component } from 'react'
//import './App.css'
//
//class Table extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//            AddTitle
//        }
//    }
//
//    async componentDidMount() {
//
//    }
//
//    render() {
//
//    }
//}
//
//export default Table


import React, { Component } from 'react';
//import FilmService from '../services/FilmService';

class CreateFilmComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movie_id: 0,
            title: '',
            description: '',
            release_yr: 0,
            language_id: 0,
            duration: 0,
            rating: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeReleaseYearHandler = this.changeReleaseYearHandler.bind(this);
        this.changeLanguageIdHandler = this.changeLanguageIdHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.saveFilm = this.saveFilm.bind(this);
    }

    saveFilm = (e) => {
        e.preventDefault();
        const film = {
        movie_id: this.state.movie_id,
        title: this.state.title,
        description: this.state.description,
        release_yr: this.state.release_yr,
        language: this.state.language,
        duration: this.state.duration,
        rating: this.state.rating
        }

        console.log(this.state.movie_id)

        fetch("http://localhost:8080/moviesDB/addfilm", {

              method: "POST",

              headers: { "Content-Type": "application/json" },

              body: JSON.stringify(film),

            }).then(() => {

            });

    }

    changeIdHandler(event) {
        this.setState({movie_id: event.target.value});
    }

    changeTitleHandler(event) {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler(event) {
        this.setState({description: event.target.value});
    }

    changeReleaseYearHandler(event) {
        this.setState({release_yr: event.target.value});
    }

    changeLanguageIdHandler(event) {
        this.setState({language_id: event.target.value});
    }

    changeDurationHandler(event) {
        this.setState({duration: event.target.value});
    }

    changeRatingHandler(event) {
        this.setState({rating: event.target.value});
    }

    cancel() {
        this.props.history.push('/moviesDB/movies')
    }

    render() {
        return(
            <div>
                <div className= "container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md=3 offset-md-3">
                            <h3 className = "text-center">Add Film</h3>
                            <div className = "card-body">

                                <form>
                                    <div className = "form-group">
                                        <label>Movie ID</label>
                                        <input placeholder="Movie Id" name="movie_id" className="form-control"
                                        value={this.state.movie_id} onChange={this.changeIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Title</label>
                                        <input placeholder="Title" name="title" className="form-control"
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                         <label>Description</label>
                                         <input placeholder="Description" name="description" className="form-control"
                                             value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                         <label>Release Year</label>
                                         <input placeholder="Release year" name="release_yr" className="form-control"
                                            value={this.state.release_yr} onChange={this.changeReleaseYearHandler}/>
                                    </div>
                                    <div className = "form-group">
                                         <label>Language ID(1 for english, 2 for anything else)</label>
                                         <input placeholder="LanguageID" name="language_id" className="form-control"
                                             value={this.state.language_id} onChange={this.changeLanguageIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                          <label>Duration</label>
                                          <input placeholder="Duration" name="duration" className="form-control"
                                              value={this.state.duration} onChange={this.changeDurationHandler}/>
                                    </div>
                                    <div className = "form-group">
                                         <label>Rating</label>
                                         <input placeholder="Rating" name="rating" className="form-control"
                                              value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveFilm}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateFilmComponent