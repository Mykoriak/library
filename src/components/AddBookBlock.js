import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class AddBookBlock extends React.PureComponent {
  constructor() {
    super();

    this.handleOnClick = this.handleOnClick.bind(this);
    this.inputRef = React.createRef();
  }

  handleOnClick() {
    if (this.inputRef.current.value) {
      this.props.addBook(this.inputRef.current.value);
      this.inputRef.current.value = '';
    }
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          ref={this.inputRef}
          placeholder="Book name"
          aria-label="Book name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.handleOnClick}>Add book</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default AddBookBlock;

AddBookBlock.propTypes = {
  addBook: PropTypes.func.isRequired
};
