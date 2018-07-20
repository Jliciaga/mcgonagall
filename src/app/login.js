import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Content,
  Actions,
  Form,
  Checkbox,
} from 'semantic-ui-react';

import HomepageLayout from './index.js';

class ModalExampleDimmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleRef = this.handleRef.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  handleRef(component) {
    this.ref = component;
  }

  open() {
    this.setState({open: true}, () => this.ref.focus());
  }

  close() {
    this.setState({open: false})
  }

  render() {
    const { open, dimmer } = this.state;
    return (
      <div>
       <Button primary content='Log In' onClick={this.open} />
       <Modal open={this.state.open} onClose={this.close}>
       <Modal.Content>
       <Modal.Description>
       <Header>
       Log In
       </Header>
       </Modal.Description>
       </Modal.Content>
       <Modal.Content>
      <Form>
        <Form.Field>
           <label>First Name</label>
           <input placeholder='First Name' ref={this.handleRef}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' ref={this.handleRef}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
          </Modal.Content>
       </Modal>
      </div>

    )
  }
}

export default ModalExampleDimmer
export default LoginForm;