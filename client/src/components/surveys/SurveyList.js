import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      //console.log(survey);
      return (
        <div className="card mb-4" key={survey._id}>
          <div></div>
          <div className="card-content">
            <span className="title is-6">{survey.subject}</span>
            <p>{survey.body}</p>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">Yes: {survey.yes}</div>
            <div className="card-footer-item">No: {survey.no}</div>
            <p className="card-footer-item">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
