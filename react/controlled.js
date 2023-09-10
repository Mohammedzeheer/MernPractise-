// Controlled Components:
// A controlled component is a form element whose value is controlled by the React state. 
// This means that the value of the form element is determined by the state of a React component 
// and is updated whenever the state changes. To use a controlled component,


// Initialize a piece of state to hold the value of the form element.
// Attach an onChange event handler to the form element to update the state whenever the value changes.


import React, { useState } from 'react';

function ControlledComponentExample() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
