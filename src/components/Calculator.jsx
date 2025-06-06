import React, { useState } from 'react'
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [numberOld, setNumberOld] = useState(0);
  const [operator, setOperator] = useState('');

  function inputNumber(e) {
    var input = e.target.value;
    if (number.toString().length != 11){
      if (number == 0) {
        setNumber(input);
      }
      else {
        setNumber(number + input);
      }
    }
  }

  function clearDisplay() {
    setNumber(0);
  }

  function percent(){
    setNumber(number / 100)
  }

  function changeSign() {
    if (number > 0){
      setNumber(-number);
    }
    else {
      setNumber(Math.abs(number));
    }
  }

  function operatorHandler(e) {
    setOperator(e.target.value);
    setNumberOld(number);
    setNumber(0);
  }

  function calculateResult(){
    if (operator == '/') {
      setNumber(numberOld / number)
    }
    
    if (operator == 'x') {
      setNumber(numberOld * number)
    }

    if (operator == '-') {
      setNumber(numberOld - number)
    }

    if (operator == '+') {
      setNumber(parseFloat(numberOld) + parseFloat(number))
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className='wrapper'>
            <Box m={12} />
            <h1 className='result'>{number}</h1>
            <button onClick={clearDisplay}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percent}>%</button>
            <button className='operators' onClick={operatorHandler} value={'/'}>/</button>
            <button className='numbers' onClick={inputNumber} value={7}>7</button>
            <button className='numbers' onClick={inputNumber} value={8}>8</button>
            <button className='numbers' onClick={inputNumber} value={9}>9</button>
            <button className='operators' onClick={operatorHandler} value={'x'}>X</button>
            <button className='numbers' onClick={inputNumber} value={4}>4</button>
            <button className='numbers' onClick={inputNumber} value={5}>5</button>
            <button className='numbers' onClick={inputNumber} value={6}>6</button>
            <button className='operators' onClick={operatorHandler} value={'-'}>-</button>
            <button className='numbers' onClick={inputNumber} value={1}>1</button>
            <button className='numbers' onClick={inputNumber} value={2}>2</button>
            <button className='numbers' onClick={inputNumber} value={3}>3</button>
            <button className='operators' onClick={operatorHandler} value={'+'}>+</button>
            <button className='zero numbers' onClick={inputNumber} value={0}>0</button>
            <button className='numbers' onClick={inputNumber} value={'.'}>,</button>
            <button className='operators' onClick={calculateResult}>=</button>
        </div>
      </Container>
    </div>  
  )
}
