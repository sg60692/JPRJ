import React from 'react';
import Coverflow from 'react-coverflow';
import './caros.scoped.css';
const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];


export default function CarouselContainer() {
  return (
    
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          display:'none'
        },
        '@media (min-width: 900px)': {
          width: '100%',
          height: '460px'
        }
      }}
    >
      <img src={fadeImages[0]} alt='Album one' />
      <img src={fadeImages[0]} alt='Album one' />
      <img src={fadeImages[0]} alt='Album one' />
      <img src={fadeImages[0]} alt='Album one' />
    </Coverflow>
  );
}

