import React from 'react';
import Dinner from './dinner.js';
import './App.css';
function App() {
  return (
    <div className = "App">
      { /* <Dinner></Dinner> */}
      <Dinner dishName = "Niahri" sweetDish = "Kheer"/> 
      <hr/>
      <Dinner dishName = "chicken Biryani" sweetDish = "Icecream"/>
      <hr/>
      <Dinner dishName = "chicken karahi" sweetDish = "Rasmalai"/>
    </div>);
    
  
}

export default App;
