import React, { Component } from 'react';

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
            <form action="">
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <select className="form-control form-control-sm" name="subject" id="subject">
                  <option value=""> -- select subject -- </option>
                  <option value="English">English</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea onChange={e => this.setState({question: e.target.value})} name="question" rows="4" id="question" placeholder="Enter question" className="form-control form-control-sm" />
              </div>
              <div className="form-group">
                <label htmlFor="answer">Correct Answer:</label>
                <input type="text" name="answer" onChange={e => this.setState({answer: e.target.value})} id="answer" placeholder="Enter answer here" className="form-control form-control-sm" />
              </div>
              <div className="form-group">
                <label htmlFor="option2">Option 2:</label>
                <input type="text" name="option2" onChange={e => this.setState({option2: e.target.value})} id="option2" placeholder="Enter second option" className="form-control form-control-sm" />
              </div>
              <div className="form-group">
                <label htmlFor="option3">Option 3:</label>
              <input type="text" name="option3" onChange={e => this.setState({ option3: e.target.value })}  id="option3" placeholder="Enter third option" className="form-control form-control-sm" />
              </div>
              <div className="form-group">
                <label htmlFor="option4">Option 4:</label>
              <input type="text" name="option4" onChange={e => this.setState({ option4: e.target.value })} id="option4" placeholder="Enter forth option" className="form-control form-control-sm" />
              </div>
              <button type="submit" className="btn btn-block btn-outline-success">
                Add Subject
              </button>
            </form>
          </div>
        </div>
      </div>;
  }
}
