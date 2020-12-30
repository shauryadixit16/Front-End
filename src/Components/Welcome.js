import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
const Welcome=() =>{
    useEffect(() => {
        M.AutoInit();
      });
    return(
        <div id="welcome" className="welcome" >
            <div className="welcome-content">
            <img src={process.env.PUBLIC_URL + '/images/home-bg-3.jpg'} className="welcome-bg" alt="Office image."/>
            <section className='welcome-text text-white align-items-center text-center'>
                <h1>Find Best Quality Jobs</h1>
                <h4 className="welcome-info">My fav text is Lorem ipsum dolor sit ametmod tempor incididunt</h4>
                <div class="fixed-action-btn">
                <a class="btn-floating btn-large" style={{backgroundColor:'#59dead'}}>
                    <i class="large material-icons">work</i>
                </a>
                <ul>
                    <li><Link to="/profilerecruiter" class="btn-floating red btn-large">Post Intern</Link></li>
                    <li><Link to="/profileseeker" class="btn-floating red darken-1 btn-large">Get Intern</Link></li>
                </ul>
            </div>
            </section>
            </div>
        </div>
        )
    }
export default Welcome;