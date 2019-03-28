import React, { Component } from "react";
import FormFields from "../ui/FormFields";
import { validate } from "../ui/misc";

export default class Signin extends Component {
  state = {
    formError: "",
    formSuccess: "",
    formData: {
      //email object
      email: {
        element: "input",
        value: "",
        config: {
          name: "email",
          type: "email",
          placeholder: "Enter Your Email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      // Password object
      password: {
        element: "input",
        value: "",
        config: {
          name: "password",
          type: "password",
          placeholder: "Enter Your Password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;
    let isValide = validate(newElement);
    newElement.valid = isValide[0];
    newElement.validationMessage = isValide[1];
    newFormData[element.id] = newElement;
    this.setState({
      formData: newFormData
    });
  };
  submit = event => {
    event.preventDefault();
    let data = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      data[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(data);
    } else {
      this.setState({
        formError: true
      });
    }
  };
  formSuccess = type => {
    const newFormData = { ...this.state.formData };
    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formSuccess: type ? "Already existe" : "Your email is validate",
      formData: newFormData
    });
    this.successMessage();
  };
  successMessage = () => {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
  };
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper">
          <form onSubmit={event => this.submit(event)}>
            <h2 style={{ textTransform: "capitalize" }}>please login</h2>
            <FormFields
              id={"email"}
              formdata={this.state.formData.email}
              change={element => this.updateForm(element)}
            />
            <FormFields
              id={"password"}
              formdata={this.state.formData.password}
              change={element => this.updateForm(element)}
            />
            <button onClick={event => this.submit(event)}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}
