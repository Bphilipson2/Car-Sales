import React from 'react';
import { connect } from 'react-redux';
import AddedFeatures from './AddedFeatures';

const Header = props => {
  console.log('Header.js: ', props);


  const car = props.car;
  // console.log(car);
  return (
    <div>
    <div>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </div>
    <div>
      <AddedFeatures car={car} features={props.features}/>
    </div>
    </div> 
  );
};

const mapStateToProps = state => {
console.log('mSTP Car state:', state.carState);
  return {
    car: state.car,
    features: state.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(Header);