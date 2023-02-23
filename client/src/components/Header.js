import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              href="/auth/google"
              className="button is-black has-text-weight-semibold has-text-white Ubuntu"
            >
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li
            key="3"
            style={{
              display: "inline-block",
              margin: "0 10px",
            }}
          >
            <span className="button tag is-primary is-large">
              Credits : {this.props.auth.credits}
            </span>
          </li>,
          <li key="1" style={{ display: "inline-block", margin: "0 10px" }}>
            <Payments />
          </li>,
          <li key="2" style={{ display: "inline-block", margin: "0 10px" }}>
            <a
              href="/api/logout"
              className="button is-black has-text-weight-semibold has-text-white Ubuntu"
            >
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item is-family-primary has-text-weight-semibold is-size-3">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="has-text-black is-family-monospace"
            >
              Emaily
            </Link>
          </div>
        </div>
        <div className="navbar-end"></div>
        <div className="navbar-item">
          <ul>{this.renderContent()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

/* <div className="columns">
        <div className="column is-fifth">
          <div className="">
            <Link to={this.props.auth ? "/surveys" : "/"}>Emaily</Link>
          </div>
        </div>
        <div className="column"></div>
        <div className="column is-2">
          <div className="buttons">
            <ul className="button is-black">{this.renderContent()}</ul>
          </div>
        </div>
      </div> */
