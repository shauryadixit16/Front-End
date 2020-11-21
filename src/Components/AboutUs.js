import React from 'react';

const AboutUs=()=>{
    return(
        <div className="container aboutus mt-4" id="aboutus">
            <div className="row">
            <h1 className="col-12 col-lg-6 offset-lg-4">Why Choose Us?</h1>
            </div>
            <div className="row">
            <div className="col-12 col-lg-3">
            <img className="rounded-circle img-fluid offset-lg-1" src={process.env.PUBLIC_URL + '/images/prof.jpg' }></img>
            <h6 className="text-center">Shivang Khandelwal</h6>
            <p className="text-center">Founder</p>
            </div>
            <div className="col-12 col-lg-7 offset-lg-1"><p className="text-justify" >Gateway of Employment is an HR service provider, aiming to eradicate unemployment from the country. Here at "GOE", we look forward to creating a positive recruiter-employee bond where the recruiter can post job opportunities to which an aspirant can apply. The entire world has an endless list of people who are jobless and are impuissant to earn even a meal. We urge you not to lose all hopes of procuring jobs and start again. To produce employment, we lead to establishing a bridge between the workers and recruiters.</p>
            <blockquote class="blockquote">"The two most powerful warriors are patience and time". <footer class="blockquote-footer">Leo Tolstoy, War and Peace</footer></blockquote>
            <p className="text-justify"> We understand the importance of time, and hence we care for yours. GOE pledges to find a gate thereby paving the way towards an "Atmanirbhar India". We bridge the gap between enthusiastic, talented individuals and the destination expecting them, taking them to their target and kissing the glorifying success. We identify the best talents to work for you in highly professional and organized establishments sector of India through our services.  
            </p>
            </div>
            </div>
        </div>
        
    )
}
export default AboutUs;