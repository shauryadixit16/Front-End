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
            <img className="rounded-circle img-fluid offset-lg-1 mb-4" src={shivang} style={{width:280 , height:280}}></img>
            <h4>Shivang Khandelwal</h4>
            <h6 className="text-muted">Founder</h6>
            </div>
            <div className="col-12 col-lg-7 offset-lg-1 my-3"><p className="text-justify" >“Every generation must think several steps ahead of their previous generations". Well said and probably well implemented by the Governement of India. In accordance with the Natioanl Education Policy, the students will be required to take part in short summer internships and gain experience from the companies. They can work there for short span of 10 days. Bringing this into light, we would like to introduce that we,at  Gateway of Employement comes with a novel concept aiming to provide work experience to young minds with the onset of their career. We are looking on to connect the high school students, under the National Education Policy, with the companies for summer internships. Being a student, one dont really understanf the importance of skills and experenice unless the person faces the corporates. Therefore, to unfold the reality of work life, its important for them to understand how things go beyond their comfort zones. So it is of outmost priority to let yor child learn big things from the very start.</p>
            <blockquote className="blockquote">"The two most powerful warriors are patience and time". <footer className="blockquote-footer">Leo Tolstoy, War and Peace</footer></blockquote>
            <p className="text-justify"> We understand the importance of time, and hence we care for yours. GOE pledges to find a gate thereby paving the way towards an "Atmanirbhar India". We bridge the gap between enthusiastic, talented individuals and the destination expecting them, taking them to their target and kissing the glorifying success. We identify the best talents to work for you in highly professional and organized establishments sector of India through our services.  
            </p>
            </div>
            </div>
            <div className="mt-5 text-center">
                <h3>Our Team</h3>
            </div>

            <div className="row d-flex justify-content-between my-4 ">
          <div className="col-lg-3 text-center my-3" style={{borderColor:'black' , borderWidth:2}}>
              <img className="rounded-circle img-fluid offset-lg-1" src={s2} style={{width:170 , height:170}}></img>
                <h4 className="mt-5 mb-4">Shaurya Dixit</h4>
                <h6 className="text-muted mb-4">Front-End Developer</h6>
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
      
          <div className="col-lg-3 text-center my-4" >
              <img className="rounded-circle img-fluid offset-lg-1" src={pawan} style={{width:150 , height:160 ,marginLeft : 10}}></img>
                <h4  className="mt-4">Pawan Suryavanshi</h4>
                <h6 className="text-muted">Back-End Developer</h6>
                <p className=" mt-3 text-justify mb-5">I am a sophomore Electrical Engineering student from IITJ, my interests are vast including competitive coding, dev, machine learning and robotics. I also play chess sometimes.</p>
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
         
          <div className="col-lg-3 text-center my-4" >

              <img className="rounded-circle img-fluid offset-lg-1" src={mohan}  style={{width:160 , height:160}}></img>
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