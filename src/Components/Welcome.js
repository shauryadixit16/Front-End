import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome=() =>{
       
    return(
        <div id="welcome" className="welcome" >
            <div className="welcome-content">
            <img src={process.env.PUBLIC_URL + '/images/home-bg.jpg'} className="welcome-bg" alt="Office image."/>
            <section className='welcome-text text-white align-items-center text-center'>
                <h1>Find Best Quality Jobs</h1>
                <h4 className="welcome-info">My fav text is Lorem ipsum dolor sit ametmod tempor incididunt</h4>
                <button className="welcome-btn">GET JOB</button>
                <button className="welcome-btn">POST JOB</button>
            </section>
            </div>
        </div>
        )
    }

export default Welcome;