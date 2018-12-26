import React from 'react';

const Question = ({index, question: { question, a, b, c, d }}) => {
  return <div>
      <br />
      <h5>{++index} - {question}</h5>
      <br />
      <br />
      <div className="radio">
        <label htmlFor="a">
          <input type="radio" name="option" id="a" /> A - {a}
        </label>
      </div>
      <div className="radio">
        <label htmlFor="b">
          <input type="radio" name="option" id="b" /> B - {b}
        </label>
      </div>
      <div className="radio">
        <label htmlFor="c">
          <input type="radio" name="option" id="c" /> C - {c}
        </label>
      </div>
      <div className="radio">
        <label htmlFor="d">
          <input type="radio" name="option" id="d" /> d - {d}
        </label>
      </div>
    </div>;
}

export default Question;