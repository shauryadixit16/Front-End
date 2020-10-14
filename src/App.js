import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage'
import NavTop from './Components/Navbar';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
            <NavTop/>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>   
            <Footer/>
    </BrowserRouter>
  );
}

export default App;
