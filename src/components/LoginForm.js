import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class LoginForm extends React.PureComponent {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.inputRef.current.value) {
      this.props.userLogin(this.inputRef.current.value);
      this.inputRef.current.value = '';
    }
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Login:</Form.Label>
          <Form.Control ref={this.inputRef} type="text" placeholder="Enter Login" />
        </Form.Group>
        <Button onClick={this.handleOnClick} color="success">Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired
};
