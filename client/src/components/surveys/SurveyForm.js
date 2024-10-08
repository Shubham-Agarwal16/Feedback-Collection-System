import _ from "lodash";
import React from "react";
import { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="hero-body">
        <div className="column">
          <p className="title is-3">Fill the survey details</p>
        </div>
        <div className="box">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <div className="field is-grouped">
              <div className="control">
                <Link to="/surveys" className="button is-link is-light">
                  Cancel
                </Link>
              </div>
              <div className="control">
                <button type="submit" className="button is-link">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
