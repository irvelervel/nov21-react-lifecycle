// MovieDetails will get the movieTitle value from App
// and with that title will fetch some details about it
// and will display those info in a Card

// LIFECYCLE
// 1) initial render(), with just the empty Card
// 2) componentDidMount() fires and triggers the fetch()
// 3) when the fetch finishes, componentDidMount sets the state
// 4) when the state or the props of a component change, the render() method fires again!
// 5) this time this.state.movie is a thing, so the interface fills up with the poster, the title etc.

import { Component } from 'react'
import { Card } from 'react-bootstrap'

class MovieDetails extends Component {
  // MovieDetails is receiving at any moment the selected movie in the dropdown
  // it will be found in this.props.movieTitle
  // we want to use this.props.movieTitle to perform a fetch to omdbAPI

  state = {
    // in here I want to save all the movie details!!
    // the actual object holding the poster, the year, the title etc.
    movie: null,
  }

  componentDidMount = async () => {
    // componentDidMount is a lifecycle method occurring JUST ONCE
    // it triggers just after the initial render of the component
    console.log('componentDidMount happened!')
    this.fetchMovieDetails()
  }

  componentDidUpdate = (previousProps, previousState) => {
    // this one is veeery frequent!
    // componentDidUpdate fires EVERY TIME there's a change
    // in the props or in the state (just like render!)

    // componentDidUpdate works too well!
    // we need to pinpoint just the situations in which we WANT to do a re-fetch!
    // when do we want to re-fetch the movie details?
    // then the selection in the dropdown changes!
    // NOT when the state changes...
    // how can we trigger our network call just when this.props.movieTitle changes?
    // with previousProps and previousState!
    if (previousProps.movieTitle !== this.props.movieTitle) {
      this.fetchMovieDetails()
    }
  }

  fetchMovieDetails = async () => {
    try {
      let response = await fetch(
        'http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.movieTitle
        // this initially will be
        // http://www.omdbapi.com/?apikey=24ad60e9&s=Batman%20Begins
      )
      if (response.ok) {
        // everything went ok!
        let data = await response.json()
        console.log(data.Search[0])
        // you want to store this data!!
        // you need to store it into a component's state
        this.setState({
          movie: data.Search[0],
        })
      } else {
        // something went wrong with the request :(
        alert('houston we got an error')
      }
    } catch (error) {
      // usually this means an internet problem!
      console.log(error)
    }
  }

  render() {
    console.log('render() fired again!')
    return (
      <Card>
        {/* this.state.movie initially is null, so I have to put this check in place */}
        {/* and render the content just after finishing the fetching, so when this.state.movie */}
        {/* is actually a thing */}
        {this.state.movie && (
          <>
            <Card.Img variant='top' src={this.state.movie.Poster} />
            <Card.Body className='text-dark'>
              <Card.Title>{this.state.movie.Title}</Card.Title>
              <Card.Text>
                {this.state.movie.Year} - {this.state.movie.imdbID}
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    )
  }
}

export default MovieDetails
