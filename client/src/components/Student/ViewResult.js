import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewResult extends Component {

  renderTable = () => {
    const { scores } = this.props;
    if (scores.length > 0) {
      return scores.map((score, i) => {
        return (
          <tr key={i}>
            <td>{score.name}</td>
            <td>{Math.ceil(score.score)}</td>
          </tr>
        )
      })
    } else {
      return (
        <div>No score found</div>
      );
    }
  }

  renderTotal = () => {
    const { scores } = this.props;
    if (scores.length > 0) {
      const total = scores.map(a => a.score).reduce((x, y) => x + y);
      return Math.ceil(total);
    } else {  
      return <div />
    }
  }

  render() {
    return (
      <div className="col-md-4 mt-5 mx-auto">
        <br /><br />
        <h4>EXAM RESULT</h4>
        <hr />
        <h5>Total: {this.renderTotal()}</h5>
        <br />
        <table className="table table-border table-stripped">
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ scores: state.scores });

export default connect(mapStateToProps)(ViewResult);