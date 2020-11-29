import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage'
import NavTop from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PostJob from './Components/PostJob';
import ProfileSeeker from './Components/ProfileSeeker';
import UpdateSeekerProfile from './Components/UpdateSeekerProfile';
import Job from './pages/JobPage';
import Intern from './pages/InternPage';
import Profile from './pages/ProfilePage';

import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
              <NavTop/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/jobs" component={Job}/>
                <Route exact path="/internships" component={Intern}/>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/updateprofile" component={UpdateSeekerProfile}></Route>
                <Route exact path="/profileseeker" component={ProfileSeeker}></Route>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/postjob' component={PostJob} />
                <Route exact path='/postjob' component={PostJob} />
              </Switch>   
              <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
