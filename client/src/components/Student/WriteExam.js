import React, { Component } from 'react';
import { connect } from 'react-redux';

class WriteExam extends Component {
  state = {
    option: ""
  }

  render() {
    console.table(this.props.questions);
    return <div className="col-md-12">
        <div>
          <br />
          <h5>
            Question: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente, at?
          </h5>
          <br />
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 1
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 2
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 3
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 4
              </label>
            </div>
            <button className="btn btn-success">Next >></button>
          </form>
        </div>
      </div>;
  }
}

const mapStateToProps = state => ({ questions: state.questions });

export default connect(mapStateToProps)(WriteExam);
