import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class LoginForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      login: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ login: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.userLogin(this.state.login);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Login:</Form.Label>
          <Form.Control type="text" placeholder="Enter Login" value={this.state.login} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired
};
