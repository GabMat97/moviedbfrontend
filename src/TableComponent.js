import React, { Component } from 'react'
import './App.css'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState({isLoading:true})

        const response = await fetch('http://3.133.129.178:8080/moviesDB/movies')

        if(response.ok) {
            const films = await response.json()
            this.setState({films,isLoading:false})
        } else {
            this.setState({isError: true, isLoading: false})
        }
    }

    renderTableHeader = () => {
        return Object.keys(this.state.films[0]).map(attr=> <th key={attr}></th>)
    }

    renderTableRows = () => {
        return this.state.films.map(film => {
            return (
                <tr key={film.id} id="content">
                <td>{film.film_id}</td>
                <td>{film.title}</td>
                <td>{film.description}</td>
                <td>{film.release_yr}</td>
                <td>{film.language_id}</td>
                <td>{film.duration}</td>
                <td>{film.rating}</td>
                </tr>
            )
        })
    }

    render() {
        const{films, isLoading, isError} = this.state

        if (isLoading) {
            return <div>Loading</div>
        }

        if (isError) {
            return <div>Error...</div>
        }
        return films.length > 0
        ? (
            <table className="table-layout">
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ) : (
            <div> There are no films available </div>
        )
    }
}

export default Table