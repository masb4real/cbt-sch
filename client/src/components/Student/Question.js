import React from 'react';

const Question = ({question, a, b, c, d}) => {
  return <div>
      <br />
      <h5>{question}</h5>
      <br />
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="a">
            <input type="radio" name="option" id="a" /> A - {a}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="b">
            <input type="radio" name="option" id="b" /> B - {b}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="c">
            <input type="radio" name="option" id="c" /> C - {c}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="d">
            <input type="radio" name="option" id="d" /> d - {d}
          </label>
        </div>
        <button className="btn btn-success">Next >> </button>
      </form>
    </div>;
}

export default Question;