import React from 'react';
import { connect } from 'react-redux';
import { removeFeatureAC } from '../actions';

const AddedFeature = props => {
  console.log(props.feature);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeatureAC(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  {removeFeatureAC}
)(AddedFeature);