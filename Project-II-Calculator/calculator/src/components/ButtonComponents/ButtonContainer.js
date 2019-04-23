import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

let numbers = [{num:'7'}, {num:'8'}, {num:'9'}, {num:'4'}, {num:'5'}, {num:'6'}, {num:'1'}, {num:'2'}, {num:'3'}]

let symbols = [{symbol:'/'}, {symbol:'X'}, {symbol:'-'}, {symbol:'+'}, {symbol:'='}];

function ButtonContainer() {
  return (
  <div className="button-container">
    <div className="white-buttons">

      <ActionButton text="clear" buttonStyle="clear" />

      <div className="numbers">
      {numbers.map( element => {
        return <NumberButton buttonStyle='number-button' text={element.num} />
      })};
      </div>

      <ActionButton text="0" buttonStyle="clear" />

    </div>

    <div className="symbols">
      {symbols.map( element => {
        return <NumberButton buttonStyle='symbol-button' text={element.symbol} />
      })};
    </div>
    
  </div>
  );
}

export default ButtonContainer;