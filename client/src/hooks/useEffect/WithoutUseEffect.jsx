import React, { useState } from 'react'
import { useFetch } from '../utils/useFetch';

// Didnt do yet

const UseEffectApp = () => {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>Learn React Hooks: useEffect</h1>
      {count}

    </div>
  )
}

export default UseEffectApp;
