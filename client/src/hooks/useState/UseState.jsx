import React, { useState } from 'react'

const UseStateApp = () => {
  const [data, setData] = useState(10);

  return (
    <div>
      Learn React Hooks:

      {'Data: ' + data}

      <button onClick={setData(n => n += 1)}>{'Rerender & Increment'}</button>

    </div>
  )
}

export default UseStateApp;
