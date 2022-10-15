import React from 'react'

const UseStateApp = () => {
  const data = 10;

  return (
    <div>
      Learn React Hooks:

      {'Data: ' + data}

      <button onClick={setData(n => n += 1)}>{'Rerender & Increment'}</button>

    </div>
  )
}

export default UseStateApp;
