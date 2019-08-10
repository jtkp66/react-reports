import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSurveys } from "../../actions/surveys";

class Surveys extends Component {
  static propTypes = {
    surveys: PropTypes.array.isRequired,
    getSurveys: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSurveys();
  }

  render() {
    return (
      <Fragment>
        <h2>My Surveys</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Coordinator</th>
              <th>Student</th>
              <th>Completed</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.surveys.map(survey => (
              <tr key={survey.id}>
                <td>{survey.id}</td>
                <td>{survey.coordinator}</td>
                <td>{survey.student}</td>
                <td>{survey.is_complete}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys.surveys
});

export default connect(
  mapStateToProps,
  { getSurveys }
)(Surveys);
