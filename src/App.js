import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar.js'
import Feed from './components/Feed.js'
import Widget from './components/Widget.js';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
