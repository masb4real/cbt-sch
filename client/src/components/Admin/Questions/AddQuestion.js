import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../../../actions';

class AddQuestion extends Component {
  state = {
    subject_id: "",
    question: "",
    answer: "",
    a: "",
    b: "",
    c: "",
    d: "",
    photo: null
  }

  onSubmit = e => {
    e.preventDefault();
    const { subject_id, question, a, b, c, d, answer, photo } = this.state;
    // some form validation

    // construct object to send to db
    const data = { subject_id, question, a, b, c, d, answer, photo };
    console.log(data);
    this.props.addQuestion(data);
  }

  renderOptions = () => {
    const { subjects } = this.props;
    if(subjects.length <= 0) {
      return <option> -- no subject found --</option>
    } else {
      return subjects.map(subject => {
        return <option key={subject.id} value={subject.id}>{subject.name}</option>
      })
    }

  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <select value={this.state.subject_id} onChange={e => this.setState({ subject_id: e.target.value })} className="form-control form-control-sm" name="subject" id="subject">
            <option value=""> -- select subject -- </option>
            {this.renderOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea onChange={e => this.setState({question: e.target.value})} name="question" rows="3" id="question" placeholder="Enter question" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="a">A:</label>
          <input type="text" name="a" onChange={e => this.setState({a: e.target.value})} id="a" placeholder="Enter first option" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="b">B:</label>
          <input type="text" name="b" onChange={e => this.setState({b: e.target.value})} id="b" placeholder="Enter second option" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="c">C:</label>
          <input type="text" name="c" onChange={e => this.setState({ c: e.target.value })}  id="c" placeholder="Enter third option" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="d">D:</label>
          <input type="text" name="d" onChange={e => this.setState({ d: e.target.value })} id="d" placeholder="Enter forth option" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Choose Answer:</label>
          <select value={this.state.answer} name="answer" onChange={e => this.setState({answer: e.target.value})} className="form-control form-control-sm" id="answer">
            <option value="">-- choose answer --</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo (optional):</label>
          <input type="file" id="photo" onChange={e => this.setState({ photo: e.target.files[0]})} name="photo" className="form-control form-control-sm" />
        </div>
        <button type="submit" className="btn btn-block btn-outline-success">
          Add Subject
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({ subjects: state.subjects });
export default connect(mapStateToProps, { addQuestion })(AddQuestion);


