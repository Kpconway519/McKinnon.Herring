import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import RouteControl from './RouteControl';

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteControl />
    </div>
  );
}

export default App;
