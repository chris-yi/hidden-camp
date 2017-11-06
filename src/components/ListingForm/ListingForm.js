import React, { Component } from "react";
import { Form, Field } from "simple-react-form";


class ListingForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form state={this.state} onChange={state => this.setState(state)}>
          <Field fieldName="name" label="Name" type={Text} />
        </Form>
        <p>My name is {this.state.name}</p>
      </div>
    );
  }
}

export default ListingForm;
