import React from 'react';
import './Home.css';
import Header from '../components/header';
import Heading from '../components/Heading/';
import Rectangle from '../assets/images/Rectangle.png';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Heading text='Main dish'></Heading>
      <div className='Banner'>
            <img src={Rectangle}>
              
            </img>
      </div>
      <Heading text='Popular dishes'></Heading>
      <div className='PopularDishes'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
      </div>
    </>
  );
}