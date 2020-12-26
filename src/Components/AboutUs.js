import React from 'react';
import pawan from '../img/pawan.jpg';
import mohan from '../img/mohan.jpg';
import shivang from '../img/shivang.jpg';
import s2 from '../img/s2.jpg';

const AboutUs=()=>{
    return(
        <div className="container aboutus mt-4" id="aboutus">
            <div className="row">
            <h1 className="col-12 col-lg-6 offset-lg-4">Why Choose Us?</h1>
            </div>
            <div className="row">
            <div className="col-12 col-lg-3">
            <img className="rounded-circle img-fluid offset-lg-1" src={shivang} style={{width:300 , height:300}}></img>
            <h4>Shivang Khandelwal</h4>
            <h6 className="text-muted">Founder</h6>
            </div>
            <div className="col-12 col-lg-7 offset-lg-1 my-3"><p className="text-justify" >Gateway of Employment is an HR service provider, aiming to eradicate unemployment from the country. Here at "GOE", we look forward to creating a positive recruiter-employee bond where the recruiter can post job opportunities to which an aspirant can apply. The entire world has an endless list of people who are jobless and are impuissant to earn even a meal. We urge you not to lose all hopes of procuring jobs and start again. To produce employment, we lead to establishing a bridge between the workers and recruiters.</p>
            <blockquote className="blockquote">"The two most powerful warriors are patience and time". <footer className="blockquote-footer">Leo Tolstoy, War and Peace</footer></blockquote>
            <p className="text-justify"> We understand the importance of time, and hence we care for yours. GOE pledges to find a gate thereby paving the way towards an "Atmanirbhar India". We bridge the gap between enthusiastic, talented individuals and the destination expecting them, taking them to their target and kissing the glorifying success. We identify the best talents to work for you in highly professional and organized establishments sector of India through our services.  
            </p>
            </div>
            </div>
            <div className="mt-5 text-center">
                <h3>Our Team</h3>
            </div>

            <div className="row d-flex justify-content-between my-4 ">
          <div className="col-lg-3 col-md-4 text-center my-3" style={{borderColor:'black' , borderWidth:2}}>
              <img className="rounded-circle img-fluid offset-lg-1" src={s2} style={{width:170 , height:180}}></img>
                <h4 className="mt-5 mb-4">Shaurya Dixit</h4>
                <h6 className="text-muted">Front-End Developer</h6>
              <p className="text-justify mt-3">Persuing BTech from IIT Jodhpur .I am Passionate about Web Development,App Development and Competetive Programming.I am always keen on exploring and learning new productive things. I also love to play and watch Cricket.</p>
              <div className="d-flex justify-content-between">
              <div className="p-4">
               <a href="https://www.linkedin.com/in/shaurya-dixit-bb81b019a" target="_blank">
                 <i className="fab fa-linkedin "></i>
                </a>
             </div>
            <div className="p-4">
              <a href="https://www.instagram.com/shauryadixit_01/" target="_blank">
                <i className="fab fa-instagram "></i>
               </a>
            </div>
            <div className="p-4">
            <a href="mailto:shauryadixitt@gmail.com"
                 target="_blank" >
                <i className="fas fa-envelope "></i>
               </a>
            </div>
              </div>
          </div>
      
          <div className="col-lg-3 col-md-6 text-center my-4">
              <img className="rounded-circle img-fluid offset-lg-1" src={pawan} style={{width:170 , height:180}}></img>
                <h4  className="mt-4">Pawan Suryavanshi</h4>
                <h6 className="text-muted">Back-End Developer</h6>
                <p className=" mt-3 text-justify">I am a sophomore Electrical Engineering student from IITJ, my interests are vast including competitive coding, dev, machine learning and robotics. I also play chess sometimes.</p>
              <div className="d-flex justify-content-between mt-4">
              <div className="p-4">
               <a href="https://www.linkedin.com/in/pawan-suryavanshi-954342189/" target="_blank">
                 <i className="fab fa-linkedin "></i>
                </a>
             </div>
            <div className="p-4">
              <a href="https://www.instagram.com/pawan_suryavanshi__/" target="_blank">
                <i className="fab fa-instagram "></i>
               </a>
            </div>
            <div className="p-4">
              <a href="mailto:suryavanshipawan21@gmail.com" target="_blank">
                <i className="fas fa-envelope "></i>
               </a>
            </div>
              </div>
            </div>
    

          <div className="col-lg-3 col-md-6 text-center my-4">
         
              <img className="rounded-circle img-fluid offset-lg-1" src={mohan}  style={{width:170 , height:180}}></img>
                <h4  className="mt-4">Mohan Chhabaria</h4>
                <h6 className="text-muted">Back-End Developer</h6>
              <p className=" mt-3 text-justify">Sophomore pursuing  electrical engineering at IIT jodhpur . An enthusiast  who is ready to grab opportunities and learn new things. Exploring the world of backend development but more into algorithms.
               {/* My tech stack  includes python, C/C++, django, drf, rest apis, javascript and graphql . 
Also a travel addict and a Melophile. */}
</p>
<div className="d-flex justify-content-between">
              <div className="p-4">
               <a href="https://www.linkedin.com/in/mohan-chhabaria/" target="_blank">
                 <i className="fab fa-linkedin "></i>
                </a>
             </div>
            <div className="p-4">
              <a href="https://www.instagram.com/mohanchhabaria/" target="_blank">
                <i className="fab fa-instagram "></i>
               </a>
            </div>
            <div className="p-4">
              <a href="mailto:mchhabaria123@gmail.com" target="_blank">
                <i className="fas fa-envelope "></i>
               </a>
            </div>
              </div>
            </div>
          
          </div>

        </div>
        
    )
}
export default AboutUs;