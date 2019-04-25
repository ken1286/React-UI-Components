import React from 'react';
import './Display.css';

let total = 0;

function CalculatorDisplay(props) {
  return (
    <div class="display">
      <h1>{props.total}</h1>
    </div>
  );
}

export default CalculatorDisplay;