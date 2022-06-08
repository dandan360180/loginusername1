
import React, { useState } from 'react';


function NandanUsestate () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count * 5)}>
        Click me
      </button>
    </div>
  );
}
export default NandanUsestate