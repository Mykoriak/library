import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  ListGroup, Row, Col, Container
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddBookBlock from './components/AddBookBlock';
import Book from './components/Book';
import { fetchBooks, addBook } from './actions/booksActions';
import { login } from './actions/userActions';
import { getBooks } from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';
import LoginForm from './components/LoginForm';
import BookDetails from './components/BookDetails';

class App extends Component {
  constructor() {
    super();

    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.libraryList = this.libraryList.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  handleAddBook(value) {
    if (value) this.props.addBook(value);
  }

  handleLogin(value) {
    if (value) this.props.userEnter(value);
  }

  libraryList() {
    return (
      <div>
        <ListGroup as="ul">
          {this.props.books.map(book => (
            <Link key={book.id} to={book.id}><Book book={book} /></Link>
          ))}
        </ListGroup>
        <AddBookBlock addBook={this.handleAddBook} />
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col sm={4}>
              <p>
                <Link to="/">Home</Link>
              </p>
              {this.props.user
                ? <h3>User: {this.props.user}</h3>
                : <LoginForm userLogin={this.handleLogin} />
              }
            </Col>
            <Col sm={8}>
              <Route
                exact
                path="/"
                render={this.libraryList}
              />
              <Route path="/:id" component={BookDetails} />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  books: getBooks(state),
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  addBook: name => dispatch(addBook(name)),
  userEnter: name => dispatch(login(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  userEnter: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};
