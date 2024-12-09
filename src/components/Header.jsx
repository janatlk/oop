import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <>
      <div className='headerdiv'>
        <div className='Logo'>
            <h1>Logo</h1>
        </div>
        <div className='List'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
        <div className='Login'>
            Login
        </div>
      </div>
    </>
  );
}
