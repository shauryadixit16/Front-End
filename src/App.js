import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage'
import NavTop from './Components/Navbar';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PostJob from './Components/PostJob';
import ProfileSeeker from './Components/ProfileSeeker';
import ProfileRecruiter from './Components/ProfileRecruiter';
import UpdateSeekerProfile from './Components/UpdateSeekerProfile';
import RegisterType from './Components/RegisterType';
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
                 <Route exact path="/profilerecruiter" component={ProfileRecruiter}/> 
                <Route exact path="/internships" component={Intern}/>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/updateprofile" component={UpdateSeekerProfile}></Route>
                <Route exact path="/profileseeker" component={ProfileSeeker}></Route>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/registertype' component={RegisterType} />
                <Route exact path='/postjob' component={PostJob} />
                <Route exact path='/contactus' component={ContactUs} />
              </Switch>   
      </BrowserRouter>
    )
  }
}

export default App;
