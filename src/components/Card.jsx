import React from 'react';
import './Card.css';
import { FaHeart, FaHeartbeat, FaRegHeart, FaStar } from "react-icons/fa";
// {size,maintext,price,stars,blur=false}
export default function Card() {
  return (
    <>
      <div className='Card'>
            <div className='Imag'>
                <div className='Rating'><div className='Star'><FaStar/></div>4.8</div>
            </div>
            <div className='maintext'>
                <div className='text1'>The Hotel</div>
                <div className='Flex'>
                    <div className='price'>180$</div>
                    <div className='like'><div className='Heart'><FaHeart/></div></div>
                </div>
            </div>
      </div>
    </>
  );
}
