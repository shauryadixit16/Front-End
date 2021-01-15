import React from 'react'
import s2 from '../img/s2.jpg'
import {Link } from 'react-router-dom';
const FilterItem = ({fill}) => {
    fill.category = 'Employee';
    fill.skills = ["python","c++","html"];
    return (
        <div>
           {fill.category === 'Employee' ? (  
              <div className="profile">
              <div className="container">
              <div className="row">
                    <div className="col s12 m12">
                    <div className="col s12 m4">
                    <div style={{ marginTop:25}} className="rounded" >
                        <img src={s2} style={{height:240,width:260}} alt="User Image"/>
                      </div>
                    </div>
                    <div className="col s12 m8 push-m1 bg-dark mt-5" style={{paddingLeft:10}}>
                         <ul class="list-group list-group-flush">
                          <li class="list-group-item"><h4 className="name">Shaurya Dixit{fill.name}</h4></li>
                          <li class="list-group-item" style={{fontWeight:'bold'}}><p className="name my-2"> Kota , Rajasthan {fill.city} , {fill.state}</p></li>
                          <li class="list-group-item"><p>Sir Padampat Singhania School{fill.school}</p></li>
                        </ul>
                     </div>
                    </div>
                    </div>
                  <div className="but ">
                    <p class="btn bg-dark" style={{marginRight:8}}>Selected 3{fill.select}</p>
                    <p class="btn bg-dark">Applied 13{fill.apply}</p>
                    </div>
                    <ul>
                    {fill.skills.map((skill,index) => (
                    <li key={index} className="text-dark mt-2" style={{fontSize:18}}>
                      <i className="fas fa-check"></i>{' '} {skill}
                    </li>
                  ))}
                  </ul>
              </div>
              </div>
           ) : (
            <div className="profile">
            <div className="container">
              <div className="row mb-2">
                  <div className="col s12 m12">
                  <div className="col s12 m4">
                  <div style={{ marginTop:25}} className="rounded" >
                      <img src={s2} style={{height:240,width:280}} alt="User Image"/>
                    </div>
                  </div>
                  <div className="col s12 m8 push-m1 bg-success mt-5" style={{paddingLeft:10}}>
                   
                       <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h2 className="name">Microsoft</h2></li>
                        <li class="list-group-item" style={{fontWeight:'bold'}}><p className="name my-2"> IT Company</p></li>
                        <li class="list-group-item"><a href="mailto:mchhabaria123@gmail.com" target="_blank" style={{color: 'green'}}>
                        <i className="fas fa-envelope">{' '}{' '}{' '}microsoft@gmail.com</i>
                       </a></li>
                      </ul>
                   </div>
                  </div>
                </div>
                <div className="alert alert-success mt-5">
                <h2 className="">About Us</h2>
      {/* {fill.about} */}Microsoft Corporation (/ˈmaɪkroʊsɒft/ MY-kroh-soft) is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue;[3] it was the world's largest software maker by revenue as of 2016.[4] It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.
      </div>
                </div>
            </div>
           )}
        </div>
    )
}

export default FilterItem;