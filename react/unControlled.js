// Uncontrolled Components:

// An uncontrolled component is a form element whose value is not controlled by React. 
// Instead, it directly manages its own state through the DOM.
// You can still access the value of an uncontrolled component using a ref.

import React, { useRef } from 'react';

function UncontrolledComponentExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Input value is: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
