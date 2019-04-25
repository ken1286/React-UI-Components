import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return (
    <a href="https://reactjs.org" className="card-container">
      <CardBanner />
      <CardContent />
    </a>
  )
}

export default CardContainer;