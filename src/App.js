import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'

class App extends Component {
  state = {
    movieTitle: 'Batman Begins',
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Choose a movie!</Form.Label>
                <Form.Control
                  as='select'
                  value={this.state.movieTitle}
                  onChange={(e) =>
                    this.setState({ movieTitle: e.target.value })
                  }
                >
                  <option>Batman Begins</option>
                  <option>Wonder Woman</option>
                  <option>Man of Steel</option>
                  <option>The Flash</option>
                  <option>Iron Man</option>
                </Form.Control>
              </Form.Group>
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
