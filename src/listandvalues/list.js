import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ListAndUniqueKeyComponent = () => {
  const fruits = [
    { id: uuidv4(), name: 'Apple' },
    { id: uuidv4(), name: 'Banana' },
    { id: uuidv4(), name: 'Orange' },
    { id: uuidv4(), name: 'Mango' }
  ];

  console.log(fruits); // For debugging, can be removed in production

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAndUniqueKeyComponent;
