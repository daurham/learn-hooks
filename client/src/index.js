import React from 'react';
import * as ReactDOM from 'react-dom/client';

import * as Hook from './hooks'; // useMemo


// Toggle each Hook component to demonstrate its usefulness
const App = Hook.UseCallback; // useMemo
// const App = Hook.UseMemoApp; // useMemo
// const App = Hook.UseStateApp; // useState

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
 