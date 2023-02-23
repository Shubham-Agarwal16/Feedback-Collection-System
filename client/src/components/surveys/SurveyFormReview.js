import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div className="field" key={name}>
        <label className="label is-medium">{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="hero-body">
      <div className="column">
        <p className="title is-3">Please confirm your entries</p>
      </div>
      <div className="box">
        {reviewFields}
        <div className="buttons">
          <button className="button is-warning" onClick={onCancel}>
            Back
          </button>
          <button
            onClick={() => submitSurvey(formValues, history)}
            className="button is-success"
          >
            Send Survey
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
