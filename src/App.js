import React from 'react';
import Footer from '../src/Components/Footer';
import Signup from '../src/Components/Signup';
import Login from '../src/Components/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Signup />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
