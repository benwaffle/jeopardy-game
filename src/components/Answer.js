import React from 'react';

// Made into a pure function, as class notation was not necessary
export default props => (
  <div className='answer'>
    <div>{props.question.answer}</div>
    <button onClick={props.closeAnswer}>Close</button>
  </div>
);
