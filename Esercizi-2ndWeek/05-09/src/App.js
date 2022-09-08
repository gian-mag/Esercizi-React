import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import Col from 'react-bootstrap/Col';
import CommentArea from './components/CommentArea';
import { Component } from 'react';

class App extends Component {

  state = {
    selected: null,
    setActive: false,
  }

  setSelected = (value) => this.setState({ selected: value })

  setActive = (value) => this.setState( {setActive : value})

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Col>
            <BookList asin={this.state.selected} books={fantasyBooks} setSelected={this.setSelected} setActive={this.setActive}/>
          </Col>
          <Col xs={4}>
            <CommentArea asin={this.state.selected}/>
          </Col>
        </header>
      </div>
    )
  }
}
export default App
