import React,{useEffect,useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import s2 from '../img/s2.jpg'
import {Link} from 'react-router-dom';
 const ProfileSeeker = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state , Setstate] = useState({recommend:'',toggle:false})
const {recommend , toggle} = state;
const onSubmit = (e) => {
  e.preventDefault();
  if(recommend == ''){Setstate({...state,toggle:false})}
  else{
    // API CALL TO SEND THE RECOMMENDATON
    Setstate({...state,toggle:true})
  }
}

  return (
    <div className="profile">
      <div className="container">
      <div className="row">
            <div className="col s12 m12">
            <div className="col s12 m4">
            <div style={{ marginTop:25}} className="rounded" >
                <img src={s2} style={{height:240,width:270}} alt="User Image"/>
              </div>
            </div>
            <div className="col s12 m8 push-m1 bg-dark mt-5" style={{paddingLeft:10}}>
              {/* <h2 className="name">Microsoft</h2>
              <h5 className="name my-4"> IT Company</h5>
              <a href="mailto:mchhabaria123@gmail.com" target="_blank" style={{color: 'green'}}>
                  <i className="fas fa-envelope">{' '}{' '}{' '}microsoft@gmail.com</i>
                 </a> */}
                 <ul class="list-group list-group-flush">
                  <li class="list-group-item"><h4 className="name">Shaurya Dixit</h4></li>
                  <li class="list-group-item" style={{fontWeight:'bold'}}><p className="name my-2"> Kota , Rajasthan</p></li>
                  <li class="list-group-item"><p>Sir Padampat Singhania School</p></li>
                </ul>
             </div>
            </div>
{/*           
          <div className="col m3 push m1" className="notif"><h6>
            Notifications
          </h6></div>  */}
          </div>
          {/* Resume Img */}
          {/* <div className="col s5">
            <div style={{margin:30}}>
              <img src="" alt="Resume"/>
            </div>
          </div> */}
          <div className="but mt-3">
            <p class="btn bg-dark" style={{marginRight:8}}>Selected 3</p>
            <p class="btn bg-dark">Applied 13</p>
            </div>
          {/* skills */}
          {/* recommendation */}
          <div class="row">
          <div className="row">



{!toggle  && (
  <div className="form-group ml-3">
  <label for="recommend" className="mt-4" style={{fontWeight:'bold'}} >Any Recommnedations</label>
  <textarea class="form-control" id="recommend" rows="2" cols="100" value={recommend} onChange={(e) => {Setstate({...state,recommend:e.target.value})}}></textarea>
<button type="submit" class="btn bg-dark my-2" onClick={onSubmit}>-></button></div>
) 
}

</div>
  </div>
  <div>
      <Link to='/updateprofile' class=" waves-light btn bg-dark"><i class="material-icons right">update</i>Update Profile</Link>
    </div>
          
      </div>
      </div>
  )
}
export default ProfileSeeker;