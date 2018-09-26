import React from 'react';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

class BookDetailsView extends React.Component {
  handleUpdate() {
    this.props.handeOnClick();
  }

  handleOnDelete() {
    this.props.handleDelete();
  }

  render() {
    const { name, takedBy } = this.props.book;
    return (
      <div>
        <p>Название: {name}</p>
        <p>{takedBy && `${takedBy} читает эту книгу`}</p>
        {
          (takedBy && (takedBy === this.props.user))
            ? <Button variant="danger" onClick={this.handleUpdate}>Вернуть в библиотеку</Button>
            : (!takedBy && this.props.user) && <Button variant="primary" onClick={this.handleUpdate}>Читать</Button>
        }
        <br />
        <Button variant="danger" onClick={this.handleOnDelete}>Удалить книгу</Button>
      </div>
    );
  }
}

export default BookDetailsView;

BookDetailsView.propTypes = {
  book: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  handeOnClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
