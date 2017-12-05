import React from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';

const App = () => {
  return (
    <div className="app">
      <div className="cities"><CityList /></div>
      <div className="active-city"><City /></div>
    </div>
  );
};

export default App;
