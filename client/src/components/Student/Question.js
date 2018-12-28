import React, { Component } from 'react';

class Question extends Component {

  state = {
    selected: ""
  };
  
  handleChange = e => {
    console.log(e.target.value)
    this.setState({selected: e.target.value})
  }

  render() {
    console.log('state changed', this.state.selected);
    const { selected } = this.state;
    let { index, question: { question, a, b, c, d, id }} = this.props;
    return <>
        <br />
        <h5>
          {++index} - {question}
        </h5>
        <br />
        <br />
        <div className="radio">
          <label>
            <input type="radio" value="a" name={id} defaultChecked={selected === "a"} onChange={this.handleChange} /> A - {a}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="b" name={id} defaultChecked={selected === "b"} onChange={this.handleChange}/> B - {b}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="c" name={id} defaultChecked={selected === "c"} onChange={this.handleChange} /> C - {c}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="d" name={id} defaultChecked={selected === "d"} onChange={this.handleChange}/> D - {d}
          </label>
        </div>
    </>;
  }
}

export default Question;