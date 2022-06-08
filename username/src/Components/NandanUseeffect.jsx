import React, { useState, useEffect } from 'react';


const NandanUseeffect = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 10000)
  })

  return <h1>{message}</h1>
};

export default NandanUseeffect;