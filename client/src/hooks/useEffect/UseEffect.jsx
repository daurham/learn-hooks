import React, { useState, useEffect } from 'react'
import { useFetch } from '../utils/useFetch';



const ChildComponent = () => {
  const [data, setData] = useState(10);

  useEffect(() => {
    console.log('(Child) On Mount & Change! Data: ' + data);

    return () => {
      console.log('(Child) On Unmount! Data: ' + data);
    }
  }, [data]);

  useEffect(() => {
    console.log('(Child) Only On Initial Mount');

    return () => {
      console.log('(Child) Cleanup On Every Unmount'); /* Runs when unmounts */
    }
  }, []);
  /* Empty array = run on init  

  Both UseEffects do the same thing if this component dosen't update the state. 
  Therefore, init rendering is the same as when it watched for data change. 
  */
  return (
    <div>
      {data}
    </div>
  );
};




const UseEffectApp = () => {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  useEffect(() => {
    console.log('(Main) On Mount & Change! Count: ' + count);

    return () => {
      console.log('(Main) On Unmount! Count: ' + count);
      /* 
      Logs because every time "count" changes, it unmounts to update the value.
        IF you increment by 0, it will not unmount.
      */
    }

  }, [count]);

  useEffect(() => {
    // console.log('(Main) On Every Rerender -- Mount (Any State Being Changed)'); // Runs EVERY rerender / State Change

    return () => {
      // console.log('(Main) Cleanup On Every Rerender (Any State Being Changed)'); // Runs EVERY rerender / State Change
    }
  }); /* Leaving out the array, causes to run on every rerender */

  useEffect(() => {
    console.log('(Main) Only On Initial Mount');

    return () => {
      console.log('(Main) Cleanup On Init Unmount');
    }
  }, []);


  return (
    <div>

      <h1>Learn React Hooks: useEffect</h1>


      <br />
      <h3>Main Component Count :</h3>
      {!hide && 'Local data as Count: ' + count}
      <br />
      <button onClick={() => setCount(n => n += 1)}>Increment by 1 {hide && 'Just testing a State change'}</button>
      <br />
      <button onClick={() => setCount(n => n += 0)}>Increment by 0 {hide && 'Just testing a State change'}</button>
      <br />
      <button onClick={() => setHide(v => !v)}>Hide 1</button>
      {'Hide 1: ' + String(hide)}

      <br />
      <br />
      <br />

      <h3>Child Component Data :</h3>
      {'{'} {!hide2 && <ChildComponent />} {'}'}
      <br />
      <button onClick={() => setHide2(v => !v)}>Hide 2</button>
      {'HIDE 2: ' + String(hide2)}
    </div>
  )
}

export default UseEffectApp;
