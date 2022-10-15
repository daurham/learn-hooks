import React, { useState, useCallback } from 'react'
import { useFetch } from '../utils/useFetch';

//  Figuring out still

const UseCallbackApp = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const computeLongestWord = (arr) => {
    if (!arr) return [];
    console.info('Computing longest word');
    let longestWord = '';

    arr.forEach(sentence => sentence.split(' ').forEach(word => {
      if (word.length > longestWord.length) longestWord = word;
    }));
    return longestWord;
  };

  const callbackValue = useCallback(() => computeLongestWord(data), [data])
  const cbVal = callbackValue();

  return (
    <div>
      <h1>Learn React Hooks: useCallback</h1>

      <button onClick={() => setCount(n => n += 1)}>Increment{count}</button> {count}
      <br />
      <div>{cbVal}</div>

    </div>
  )
}

export default UseCallbackApp;
