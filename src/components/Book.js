import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

class Book extends React.PureComponent {
  render() {
    const { book: { name, takedBy } } = this.props;
    return (
      <ListGroup.Item as="li">
        {takedBy ? `${name} ${takedBy} is reading` : name }
      </ListGroup.Item>
    );
  }
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired
};
