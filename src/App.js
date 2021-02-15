import React from 'react';
import Body from './Body';
import Header from "./Header";
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
