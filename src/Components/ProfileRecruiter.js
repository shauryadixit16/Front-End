import React,{useEffect,useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import microsoft from '../img/micro.jpg'
import {Link , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
const ProfileRecruiter = ({user}) => {
  const [redirctTo, setRedirctTo] = useState(false);
    useEffect(() => {
      if(!user){setRedirctTo({redirctTo:true})}
    console.log(user);
        M.AutoInit();
      });
      const [state,Setstate] = useState({
        toggle : false,about:''
      });
      const {toggle , about} = state;
      if(redirctTo){
        return <Redirect to="/login" />
     }else{
    return (
        <div className="profile">
      <div className="container">
        <div className="row">
            <div className="col s12 m12">
            <div className="col s12 m4">
            <div style={{ marginTop:25}} className="rounded" >
                <img src={microsoft} style={{height:240,width:300}} alt="User Image"/>
              </div>
            </div>
            <div className="col s12 m8 push-m1 bg-dark mt-3" style={{paddingLeft:10}}>
              {/* <h2 className="name">Microsoft</h2>
              <h5 className="name my-4"> IT Company</h5>
              <a href="mailto:mchhabaria123@gmail.com" target="_blank" style={{color: 'green'}}>
                  <i className="fas fa-envelope">{' '}{' '}{' '}microsoft@gmail.com</i>
                 </a> */}
                 <ul class="list-group list-group-flush">
                  <li class="list-group-item"><h2 className="name">Microsoft</h2></li>
                  <li class="list-group-item" style={{fontWeight:'bold'}}><p className="name my-2"> IT Company</p></li>
                  <li class="list-group-item"><a href="mailto:mchhabaria123@gmail.com" target="_blank" style={{color: 'green'}}>
                  <i className="fas fa-envelope" style={{color:'black'}}>{' '}{' '}{' '}microsoft@gmail.com</i>
                 </a></li>
                </ul>
             </div>
            </div>
{/*           
          <div className="col m3 push m1" className="notif"><h6>
            Notifications
          </h6></div>  */}
          </div>
         
        <div className="ml-3 my-5">
      <Link to='/postjob' class="btn bg-dark"><i class="material-icons right">work</i>Post Your Intern</Link>
    </div>
    <div className="row">

    {!toggle ?  (
      <div className="form-group ml-3">
      <label for="about" className="mt-4" style={{fontWeight:'bold'}} >About us</label>
      <textarea class="form-control" id="about" rows="2" cols="100" value={about} onChange={(e) => {Setstate({...state,about:e.target.value})}}></textarea>
    <button type="submit" class="btn bg-dark my-2" onClick={() => Setstate({...state,toggle:true})}>Done!</button></div>
    ) :
    (<div className="ml-1">
      <h3>About Us!</h3>
    <div className="alert alert-dark">
      {about}
      </div>
      </div>)
    }
  
    </div>
          </div>
      </div>
    )
}
}

const getPropsFromState = (state) => {
  return {
      user : state.user,
  }
}
export default connect(getPropsFromState,null)(ProfileRecruiter);
