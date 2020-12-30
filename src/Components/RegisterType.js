import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Link , withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import api from '../api';
//import {login} from '../actions/asyncActions';
const RegisterType = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state, Setstate] = useState({
      hire : '',
      done : false
  });

  const {hire , done} = state;

  const api = (e) => {
 // e.preventDefault();
  console.log(hire);
    // api call
  };

  return (
    <body
      className='login'
      style={{
        backgroundColor: '#f0fff0',
      }}
    >
      <main>
        <center>
          <h5 className='heading' style={{ color: '#59dead' }}>
          What is your purpose ?
          </h5>

          <div class='container' style={{ marginTop: 20, paddingBottom: 20 }}>
            <div
              class='z-depth-5 row'
              style={{
                display: 'inline-block',
                paddingLeft: 48,
                paddingRight: 48,
                paddingTop: 12,
                paddingBottom: 22,
                borderColor: '#EEE',
                borderWidth: 1,
                backgroundColor: '#f5f5f5',
                boxShadow: 10,
              }}
            >

                <h4 className="my-5">I want to ...</h4>
              
              <div>
              <button type="button" class="btn btn-outline-success btn-large mr-4 mb-3 px-5" onClick={(e)=>{
                  Setstate({hire : 'Employer' , done : true});
              }
              }>Hire</button>
              <button type="button" class="btn btn-outline-success btn-large mr-3 mb-3" onClick={(e)=>{
                  Setstate({hire : 'Employee' , done : true});
              }
              }>Get Hired</button>
</div>
              {done && (
                  <Link to='/signup' exact>
                      <button
                      class='btn waves-light m-3'
                      style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                      type='submit'
                      onClick={api}
                    >
                      Next
                      <i class='material-icons right'>send</i>
                    </button>
                  </Link>
              )}          
            </div>
          </div>
        </center>
      </main>
    </body>
  );
};

export default withRouter(connect(null , null)(RegisterType));