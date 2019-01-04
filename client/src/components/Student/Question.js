import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveOptions } from '../../actions';

class Question extends Component {

  state = {
    selected: "",
    answer: ""
  };

  componentWillMount() {
    const { question: { id }} = this.props;
    const selected = localStorage.getItem(`q_${id}`);
    console.log(`q_${id}`)
    if(selected !== null) {
      this.setState({ selected });
    }
  }
  
  handleChange = e => {

    const { mark, question: { subject_id, id, answer }} = this.props;

    this.setState({
      selected: e.target.value,
    });



    // save selected to localStore
    localStorage.setItem(`q_${e.target.name}`, e.target.value);

    if(answer === e.target.value) {
      console.log('correct');
      const data = {subject_id, id, answer: 'correct', selected: e.target.value, mark};
      console.log(data);
      this.props.saveOptions(data);
    } else {
      console.log('wrong');
      const data = {subject_id, id, answer: 'wrong', selected: e.target.value, mark: 0};
      console.log(data);
      this.props.saveOptions(data);
    }
    
  }

  render() {
    const { selected } = this.state;

    let { index, question: { question, a, b, c, d, id }} = this.props;
    return <>
        <br />
        <h5>
          {++index} - {question}
        </h5>
        <br /><br />
        <div className="radio">
          <label>
            <input type="radio" value="A" name={id} defaultChecked={selected === "A"} onChange={this.handleChange} /> A - {a}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="B" name={id} defaultChecked={selected === "B"} onChange={this.handleChange}/> B - {b}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="C" name={id} defaultChecked={selected === "C"} onChange={this.handleChange} /> C - {c}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="D" name={id} defaultChecked={selected === "D"} onChange={this.handleChange}/> D - {d}
          </label>
        </div>
    </>;
  }
}

export default connect(null, { saveOptions })(Question);