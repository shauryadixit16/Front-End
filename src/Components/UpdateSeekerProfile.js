import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
const UpdateSeekerProfile = ({user}) => {
  const [redirctTo, setRedirctTo] = useState(false);
  useEffect(() => {
    if(!user){setRedirctTo({redirctTo:true})}
    // console.log(user);
      M.AutoInit();
  });
  const [state, Setstate] = useState({
    fname: '',
    dob: '',
    mobile: '',
    modal: false,
    exp: '',
    textarea1: '',
    // skilled: '',
  });
  const {
    fname,
    dob,
    mobile,
    modal,
    exp,
    textarea1,
    // skilled,
  } = state;

  const onchange = (e) => {
    Setstate({ ...state, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      fname === '' ||
      dob === '' ||
      mobile === '' ||
      exp === '' ||
      textarea1 === '' 
      // skilled === ''
    ) {
      return M.toast({
        html: 'Please Enter all the fields',
        displayLength: 3000,
      });
    }
    console.log(textarea1);
    return Setstate({ ...state, modal: true });
    
  };

  const register = (e) => {
    e.preventDefault();
    // // API CALL
    M.toast({ html: 'You have been Registered', displayLength: 3000 });
    Setstate({
      fname: '',
      dob: '',
      mobile: '',
      exp: '',
      modal: false,
      textarea1: '',
    });
  };
  if(redirctTo){
    return <Redirect to="/login" />
 }else{
  return (
    <body
      className='signup'
      style={{
        backgroundColor: '#f0fff0',
      }}
    >
      <main>
        <center>
          <h6 className='heading' style={{ color: '#59dead' }}>
            User Details <i class='fas fa-user-plus'></i>
          </h6>

          <div class='container' style={{ marginTop: 20, paddingBottom: 20 }}>
            <div
              class='z-depth-5 row'
              style={{
                display: 'inline-block',
                paddingLeft: 48,
                paddingRight: 48,
                paddingTop: 32,
                borderColor: '#EEE',
                borderWidth: 1,
                backgroundColor: '#f5f5f5',
                boxShadow: 10,
              }}
            >
              <form
                class='col s12'
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='fname'
                      id='fname'
                      value={fname}
                      onChange={onchange}
                    />
                    <label for='fname'>Father's Name</label>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='date'
                      name='dob'
                      id='dob'
                      value={dob}
                      onChange={onchange}
                    />
                    <label for='dob'>DOB</label>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='number'
                      name='mobile'
                      id='mobile'
                      value={mobile}
                      onChange={onchange}
                    />
                    <label for='mobile'>Mobile Number</label>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='exp'
                      id='exp'
                      value={exp}
                      onChange={onchange}
                    />
                    <label for='exp'>Experience</label>
                  </div>
                </div>
                {/* <div className='row'>
                  <p>
                    <label
                      style={{
                        color: '#59dead',
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    >
                      Are you a Skilled worker?
                    </label>
                  </p>
                  <div class='input-field col s12'>
                    <label>
                      <input
                        name='skilled'
                        className='with-gap'
                        type='radio'
                        value='yes'
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class='input-field col s12'>
                    <label>
                      <input
                        name='skilled'
                        className='with-gap'
                        type='radio'
                        value='no'
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div> */}
                <div class='row'>
                  <div class='input-field col s12'>
                    <textarea
                      id='textarea1'
                      name='textarea1'
                      class='materialize-textarea'
                      value={textarea1}
                      onChange={onchange}
                    ></textarea>
                    <label for='textarea1'>
                      <i class='fas fa-align-left'></i> {''} {''}Skills
                    </label>
                  </div>
                </div>
                <p>
                    <label
                      style={{
                        color: '#59dead',
                        fontWeight: 600,
                        fontSize: 13,
                        marginBottom : 25
                      }}
                    >
                    Please use comma separated values for Skills (eg. MS Word,Excel)
                    </label>
                  </p> 
                {/* <div className='row'>
                  <p>
                    <label
                      style={{
                        color: '#59dead',
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    >
                      Type of employment you are looking for :{' '}
                    </label>
                  </p>
                  <div class='input-field col s12'>
                    <label>
                      <input name='group1' className='with-gap' type='radio' />
                      <span>Permanent</span>
                    </label>
                  </div>
                  <div class='input-field col s12'>
                    <label>
                      <input name='group1' className='with-gap' type='radio' />
                      <span>Temporary</span>
                    </label>
                  </div>
                </div> */}
                <br />
                <center>
                  <div class='row'>
                    {modal ? (
                      <button
                        class='btn waves-effect waves-light btn-large modal-trigger'
                        style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                        type='submit'
                        href='#modal1'
                      >
                        TnC
                        <i class='material-icons right'>send</i>
                      </button>
                    ) : (
                      <button
                        class='btn waves-light btn-large'
                        style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                        type='submit'
                        onClick={onsubmit}
                      >
                        Submit
                        <i class='material-icons right'>send</i>
                      </button>
                    )}
                  </div>
                  <h4 style={{ marginBottom: 20, marginTop: 35 }}>
                    Gateway of Employement
                  </h4>

                  <div id='modal1' class='modal'>
                    <div class='modal-content'>
                      <h4>Terms & Conditions</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis ratione porro illum rem! Unde accusantium
                        ullam maiores minima ab ea! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Impedit vero voluptatum
                        incidunt fugit quis eveniet dolorum exercitationem
                        recusandae? Unde, cupiditate!
                      </p>
                    </div>
                    <div class='modal-footer'>
                      <button
                        href='#!'
                        class='modal-close waves-effect waves-green btn-flat'
                        onClick={register}
                      >
                        Agree
                      </button>
                    </div>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>
      </main>
    </body>
  );
}
};

const getPropsFromState = (state) => {
  return {
      user : state.user,
  }
}

export default connect(getPropsFromState , null)(UpdateSeekerProfile);

