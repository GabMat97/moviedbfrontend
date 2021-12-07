import React from "react";
import ReactDOM from "react-dom";
import FilmItem from './FilmItem';
import FilmList from './FilmList';
import FilmEntry from './FilmEntry';
import SearchBar from './SearchBar';
import Modal from './Modal';
import "./index.css";

// FilmDatebase
class FilmDatabaseApp extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      filterText: "",
      rows: [],
      currentFilm: null,
    };
    this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // const filminfo = [{title: 'gabe'}]
    fetch("http://3.144.121.120:8080/moviesDB/movies")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        const filminfo = jsonData;
        this.setState({
          rows: filminfo,
        });
      })
      .catch((error)=> {
        
      });
      
  }

  handleFiltertextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  openModal(film) {
    this.setState({
      currentFilm: film,
    });
    this.modalRef.current.showModal();
  }

  returnCurrentFilm() {
    return this.state.currentFilm;
  }

  handleClick(event) {
    alert("Search Result: " + this.state.filterText);
    event.preventDefault();
    const filterText = this.state.filterText;

    const results = [];
    const rows = this.state.rows;

    rows.forEach((film) => {
      if (film.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      results.push(film);
    });
    this.setState({
      rows: results,
    });
  }
  render() {
    const renderRows = [];

    if (this.state.rows && this.state.rows.length) {
      this.state.rows.forEach((film) => {
        renderRows.push(<FilmItem openModal={() => this.openModal(film)} film={film} key={film.film_id} />);
      });
    };

    return (
      <div>
        <div>
          <div className="Title" >
            <h1>Film Database</h1>
          </div>
          <div className="SearchBarWrapper"> 
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFiltertextChange}
              onFilterTextSubmit={this.handleSubmit}
              handleClick={this.handleClick}
            />
          </div>
          <FilmEntry />
          <br />
          <FilmList
            movies={this.state.rows}
            filterText={this.state.filterText}
            rows={renderRows}
          />
          <br />
          <Modal
            ref={this.modalRef}
            film={this.returnCurrentFilm()}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FilmDatabaseApp />, document.getElementById("root"));
