import React, { Component } from "react";

import "./App.css";

import validate from "./validate";
import PhoneNumber from "./PhoneNumber";
import AccessCode from "./AccessCode";

class App extends Component {
  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
        phone: {
          value: "",
          placeholder: "Phone number",
          valid: "false",
          validationRules: {
            maxLength: 10,
            isRequired: true,
          },
          touched: "false",
        },
        code: {
          value: "",
          placeholder: "Access Code",
          valid: "false",
          validationRules: {
            isRequired: false,
            maxLength: 6,
          },
          touched: "false",
        },
      },
    };
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };

  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    console.dir(formData);
  };

  // code to check express connection
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWereMount() {
    this.callAPI();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.formControls.code.value) {
      const data = {
        phone: this.state.formControls.phone.value,
        code: this.state.formControls.code.value,
      };

      fetch("http://localhost:9000/users/ValidateAccessCode/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({ data }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          alert(JSON.stringify(data));
        });
    } else {
      const data = {
        phone: this.state.formControls.phone.value,
      };
      fetch("http://localhost:9000/users/CreateNewAccessCode/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({ data }),
      }).then(function (response) {
        console.log(response);
        return response;
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1> Phone Authentication System </h1>
          <p className="App-intro">;{this.state.apiResponse}</p>
        </header>

        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <label>Enter the Name</label>
            <PhoneNumber
              name="phone"
              placeholder={this.state.formControls.phone.placeholder}
              value={this.state.formControls.phone.value}
              onChange={this.changeHandler}
            />

            <br />
            <label>Enter the Code</label>
            <AccessCode
              name="code"
              placeholder={this.state.formControls.code.placeholder}
              value={this.state.formControls.code.value}
              onChange={this.changeHandler}
            />
            <br />
            <button
              className="submit-button"
              onClick={this.handleSubmit}
              disabled={!this.state.formIsValid}
            >
              Submit
            </button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
