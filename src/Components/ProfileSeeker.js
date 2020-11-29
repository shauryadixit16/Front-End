import React,{useEffect,useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Link} from 'react-router-dom';
 const ProfileSeeker = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state , Setstate] = useState({recommend:''})
const {recommend} = state;
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col s12 m9">
          <div className="col s5">
            <div style={{margin:30}}>
              <img src="" alt="User IMage"/>
            </div>
          </div>
          <div className="col s7" style={{paddingLeft:60}}>
            <h3 className="name">Shaurya Dixit</h3>
          <h5 className="city">Kota , Rajasthan</h5>
          <p className="grad">BTech Graduate from IIT Jodhpur</p>
          <div className="but">
            <p class="btn" style={{marginRight:8}}>Selected 3</p>
            <p class="btn">Applied 13</p>
            </div>
          
           </div>
          </div>
          <div className="col m3" className="notif"><h6>
            Notifications
          </h6></div> 
          </div>
          {/* Resume Img */}
          <div className="col s5">
            <div style={{margin:30}}>
              <img src="" alt="Resume"/>
            </div>
          </div>
          {/* skills */}
          {/* recommendation */}
          <div class="row">
    <form class="col s12 m6">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="recommend" class="materialize-textarea" onChange={(e) => Setstate({recommend:e.target.value})} value={recommend}></textarea>
          <label for="recommend">Any Recommendations?</label>
        </div>
      </div>
    </form>
  </div>
  <div>
      <Link to='/updateprofile' class=" waves-light btn"><i class="material-icons right">update</i>Update Profile</Link>
    </div>
          </div>
      </div>
 
  )
}

export default ProfileSeeker;