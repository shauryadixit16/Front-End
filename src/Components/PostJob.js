import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
const PostJob = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state, Setstate] = useState({
    title: '',
    desc: '',
    req: '',
    salary: '',
    gain: '',
    job: '',
    home :'',
    address:'',
    optional : ''
  });
  const { title, desc, req, salary, job, gain ,duration ,home, time , address,optional} = state;

  const onchange = (e) => {
    Setstate({ ...state, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (title === '' || desc === '' || req === '' ||  gain === '' ||  (job ==='yes' && salary==='') || (home ==='no' && address==='')  ){
      return M.toast({  
        html: 'Please Enter all the fields',
        displayLength: 3000,
      });
    }
  else{
   console.log('done');
  }
  };

  const register = (e) => {
    e.preventDefault();
   
    // API CALL

    M.toast({ html: 'You have been Registered', displayLength: 3000 });
    Setstate({
      title: '',
      desc: '',
      req: '',
      salary: '',
      gain: '',
      job: '',
      home : '',
      address: '',
      optional : ''
    });
  };

  return (
    <body
      className='signup'
      style={{
        backgroundColor: '#f0fff0',
      }}
    >
      <main>
        <center>
          <div class='container' style={{ marginTop: 20, paddingBottom: 20  }}>
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
            ><h5 className='heading' style={{ color: '#59dead' }}>Post Your Intern {' '}
            <i class="fas fa-user-md"></i>
          </h5>
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
                      name='title'
                      id='title'
                      value={title}
                      onChange={onchange}
                    />
                    <label for='title'>Title</label>
                  </div>
                </div>
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='desc'
                      id='desc'
                      value={desc}
                      onChange={onchange}
                    />
                    <label for='desc'>Description</label>
                  </div>
                </div> 
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='req'
                      id='req'
                      value={req}
                      onChange={onchange}
                    />
                    <label for='req'>Requirements</label>
                  </div>
                </div> 
                {/* <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='salary'
                      id='salary'
                      value={salary}
                      onChange={onchange}
                    />
                    <label for='salary'>Stipend in Rs per month</label>
                  </div>
                </div> */}
                <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea name="gain" id="gain" value={gain} onChange={onchange} class="materialize-textarea"></textarea>
                    <label for="gain">What will the Intern gain?</label>
                    </div>
                </div>
                </form>
                </div>
                <p>
                    <label
                      style={{
                        color: '#59dead',
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                    This is a Paid Intern?
                    </label>
                  </p> 
                <p>
                <label>
                  <input name="job"  className='with-gap' type="radio" checked={job === 'yes'}  value='yes' onChange={onchange}/>
                  <span>Yes</span>
                </label>
              </p>
               {job === 'yes' && (
                 <div class='row'>
                 <div class='input-field col s12'>
                   <input
                     class='validate'
                     type='text'
                     name='salary'
                     id='salary'
                     value={salary}
                     onChange={onchange}
                   />
                   <label for='salary'>Stipend in Rs per month</label>
                 </div>
               </div>
              )}
              <p>
                <label>
                  <input name="job"  className='with-gap' type="radio" checked={job === 'no'}  value='no'  onChange={onchange}/>
                  <span>No</span>
                </label>
              </p>

              <p>
                    <label
                      style={{
                        color: '#59dead',
                        fontWeight: 600,
                        fontSize: 15,
                        marginTop:50
                      }}
                    >
               Intern will work from home?
                    </label>
                  </p>
                <p>
                <label>
                  <input name="home" type="radio" className="with-gap" checked={home === 'yes'}  value='yes' onChange={onchange}/>
                  <span>Yes</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="home" type="radio" className="with-gap" checked={home === 'no'}  value='no'  onChange={onchange}/>
                  <span>No</span>
                </label>
              </p>
              {home === 'no' && (
                <div class='row'>
                <div class='input-field col s12'>
                  <input
                    class='validate'
                    type='text'
                    name='address'
                    id='address'
                    value={address}
                    onChange={onchange}
                  />
                  <label for='address'>Address of Workplace</label>
                </div>
              </div>
              )}
                <div class="row">
                    <div class="input-field col s12">
                    <textarea id="optional" name="optional" value={optional} onChange={onchange} class="materialize-textarea"></textarea>
                    <label for="optional">Any other details? (Optional)</label>
                    </div>
                </div>
                <br />
                <center>
                  <div class='row'>
                      <button
                        class='btn waves-light'
                        style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                        type='submit'
                        onClick={onsubmit}
                      >
                        Submit
                        <i class='material-icons right'>send</i>
                      </button>
                  </div>
                </center>
                <h4 style={{ marginBottom: 20, marginTop: 15 }}>
                    Gateway of Employement
                  </h4>
              </form>
            </div>
          </div>
        </center>
      </main>
    </body>
  );
};
export default PostJob;
