import React from 'react'
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className='wrapper'>
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button className='operators'>/</button>
            <button className='numbers'>7</button>
            <button className='numbers'>8</button>
            <button className='numbers'>9</button>
            <button className='operators'>X</button>
            <button className='numbers'>4</button>
            <button className='numbers'>5</button>
            <button className='numbers'>6</button>
            <button className='operators'>-</button>
            <button className='numbers'>1</button>
            <button className='numbers'>2</button>
            <button className='numbers'>3</button>
            <button className='operators'>+</button>
            <button className='zero numbers'>0</button>
            <button className='numbers'>,</button>
            <button className='operators'>=</button>
        </div>
      </Container>
    </div>  
  )
}
