import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormFields from "../../ui/FormFields";
import { validate } from "../../ui/misc";
import { promotionsDB } from "../../../firebase";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email",
          type: "email",
          placeholder: "Enter Your email"
        },
        validation: {
          required: true,
          email: true
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
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();
    let data = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      data[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      promotionsDB
        .orderByChild("email")
        .equalTo(data.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            promotionsDB.push(data);
            this.formSuccess(true);
          } else {
            this.formSuccess(false);
          }
        });
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
      <Fade duration={1000}>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter Your Email</div>
            <div className="enroll_input">
              <FormFields
                id={"email"}
                formdata={this.state.formData.email}
                change={element => this.updateForm(element)}
              />
            </div>
            {this.state.formError ? (
              <Fade bottom collapse>
                <div className="error_label">
                  Something is wrong, check your email.
                </div>
              </Fade>
            ) : null}

            <div className="success_label" style={{ color: "green" }}>
              {this.state.formSuccess}
            </div>

            <button
              onClick={event => {
                this.submitForm(event);
              }}
            >
              Enroll
            </button>
            <div className="enroll_discl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, quisquam.
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
