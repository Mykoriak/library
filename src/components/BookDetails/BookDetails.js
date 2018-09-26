import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  fetchBook, fetchBooks, updateBook, deleteBook
} from '../../actions/booksActions';
import { getBook } from '../../reducers/rootReducer';
import { getUser } from '../../reducers/userReducer';
import BookDetailsView from './BookDetailsView';

class BookDetails extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  handleOnClick() {
    const { id, taked, takedBy } = this.props.book;
    if (this.props.user && (!takedBy || takedBy === this.props.user)) {
      if (id && taked) {
        let takedNew;
        if (taked === 'true') { // need convert to bool
          takedNew = 'false';
        } else {
          takedNew = 'true';
        }
        const takedByNew = !takedBy ? this.props.user : '';
        this.props.updateBook(id, takedNew, takedByNew);
      }
    }
  }

  handleDelete() {
    this.props.deleteBook(this.props.book.id);
    this.props.fetchBooks();
    this.props.history.push('/');
  }

  render() {
    if (!this.props.book) return null;
    return (
      <BookDetailsView
        handleDelete={this.handleDelete}
        handleOnClick={this.handleOnClick}
        book={this.props.book}
        user={this.props.user}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id)),
  fetchBooks: () => dispatch(fetchBooks()),
  updateBook: (id, taked, takedBy) => dispatch(updateBook(id, taked, takedBy)),
  deleteBook: id => dispatch(deleteBook(id))
});

const mapStateToProps = state => ({
  book: getBook(state),
  user: getUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

BookDetails.propTypes = {
  fetchBook: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired
};
