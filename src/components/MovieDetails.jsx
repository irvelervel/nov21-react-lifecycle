// MovieDetails will get the movieTitle value from App
// and with that title will fetch some details about it
// and will display those info in a Card

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
    return (
      <Card>
        <Card.Img variant='top' src='https://placekitten.com/300/300' />
        <Card.Body className='text-dark'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default MovieDetails
