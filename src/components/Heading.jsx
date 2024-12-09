import React from 'react';
import './Heading.css';
export default function Heading({text}) {
    
  return (
    <>
    <div className='Heading'>
      <div className='Line'>

      </div>
      <div className='Text'>
        <h1>{text}</h1>
      </div>
      <div className='Line'>

      </div>
      </div>
    </>
  );
}
