import React, { Component } from 'react';

import AddQuestion from './AddQuestion';

export default class Questions extends Component {
  state = {
    subject_id: null,
    question: "",
    answer: "",
    option2: "",
    option3: "",
    option4: "",
  }

  onSubmit = e => {
    e.preventDefault();

  }

  render() {
    return <div className="col-md-6 mx-auto ">
        <div className="card">
          <div className="card-header">
            <h3>Add Question</h3>
          </div>
          <div className="card-body">
            <AddQuestion />
          </div>
        </div>
      </div>;
  }
}
