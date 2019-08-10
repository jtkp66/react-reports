import React, { Component } from "react";

class Form extends Component {
  state = {
    coordinator: "",
    student: "",
    host: "",
    question: "",
    is_complete: "",
    photo_main: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const {
      coordinator,
      student,
      host,
      is_complete,
      photo_main,
      question
    } = this.state;
    const survey = {
      coordinator,
      student,
      host,
      is_complete,
      photo_main,
      question
    };
  };

  render() {
    const {
      coordinator,
      student,
      host,
      is_complete,
      photo_main,
      question
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Survey</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Coordinator</label>
            <input
              className="form-control"
              type="text"
              name="coordinator"
              onChange={this.onChange}
              value={coordinator}
            />
          </div>
          <div className="form-group">
            <label>Student</label>
            <input
              className="form-control"
              type="text"
              name="student"
              onChange={this.onChange}
              value={student}
            />
          </div>
          <div className="form-group">
            <label>Host</label>
            <input
              className="form-control"
              type="text"
              name="host"
              onChange={this.onChange}
              value={host}
            />
          </div>
          <div className="form-group">
            <label>How Was Last Month</label>
            <input
              className="form-control"
              type="text"
              name="question"
              onChange={this.onChange}
              value={question}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
