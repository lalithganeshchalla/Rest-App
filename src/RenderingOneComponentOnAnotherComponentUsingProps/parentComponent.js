import React from 'react'
import ChildComponent from './childComponent';
const parentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent 
      name="Lalith" 
      age = {24} />
    </div>
  );
};
export default parentComponent;