import React from 'react';

import Header from './components/Header';
import AdditionalFeatures from './components/AdditionalFeatures';


const App = () => {


  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
      </div>
      <div className="box">
        <AdditionalFeatures />
      </div>
    </div>
  );
};

export default App;