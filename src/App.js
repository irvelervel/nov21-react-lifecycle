import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'
import MovieDropDown from './components/MovieDropDown'

class App extends Component {
  state = {
    movieTitle: 'Batman Begins',
  }

  changeMovieTitle = (newMovieSelected) => {
    this.setState({
      movieTitle: newMovieSelected,
    })
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              <MovieDropDown
                movieTitle={this.state.movieTitle} // read-only value
                changeMovieTitle={this.changeMovieTitle} // the function for changing it
              />
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              <MovieDetails movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
