import React from 'react';
import Question from './Question';

export default function AllQuestions({ questions }) {
  const length = 75 / questions.length;
  
  return (
    <div>
      {questions.map((data, i) => {
        return <Question key={i} mark={length} question={data} index={i}/>
      })}
    </div>
  )
}
