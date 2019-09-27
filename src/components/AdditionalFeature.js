import React from 'react';
import { connect } from 'react-redux';
import { addFeatureAC } from '../actions';

const AdditionalFeature = props => {
  // console.log(props.feature);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeatureAC(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addFeatureAC }
)(AdditionalFeature);