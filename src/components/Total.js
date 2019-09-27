import React from 'react';

const Total = props => {
  console.log('Total.js:', props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.carState.car.price + props.carState.additionalPrice}</h4>
    </div>
  );
};

export default Total;