import React from 'react'

const childComponent = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <h3>Name : {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Address: {props.address}</h3>
      <h3>Phone: {props.phone}</h3>
    </div>
  );
}
export default childComponent;