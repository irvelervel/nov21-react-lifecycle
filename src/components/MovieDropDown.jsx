import { Form } from 'react-bootstrap'

const MovieDropDown = ({ movieTitle, changeMovieTitle }) => (
  <Form.Group>
    <Form.Label>Choose a movie!</Form.Label>
    <Form.Control
      as='select'
      value={movieTitle}
      onChange={(e) => changeMovieTitle(e.target.value)}
    >
      <option>Batman Begins</option>
      <option>Wonder Woman</option>
      <option>Man of Steel</option>
      <option>The Flash</option>
      <option>Iron Man</option>
    </Form.Control>
  </Form.Group>
)

export default MovieDropDown
