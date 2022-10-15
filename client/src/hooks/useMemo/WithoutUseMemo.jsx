import React, { useState } from 'react'
import { useFetch } from '../utils/useFetch';

const UseMemoApp = () => {
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

  return (
    <div>
      <h1>Learn React Hooks: useMemo</h1>

      <button onClick={() => setCount(n => n += 1)}>Increment{count}</button> {count}
      <br />
      <div>{computeLongestWord(data)}</div>

    </div>
  )
}

export default UseMemoApp;
