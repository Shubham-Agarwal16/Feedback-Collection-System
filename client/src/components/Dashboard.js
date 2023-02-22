import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div className="hero-body">
      <div className="columns">
        <div className="column">
          <p className="title is-3">All Survyes</p>
        </div>
        <div className="column"></div>
        <div className="column">
          <Link
            to="/surveys/new"
            className="buttons"
            style={{ justifyContent: "right" }}
          >
            <i className="button is-black">Create New Survey</i>
          </Link>
        </div>
      </div>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
