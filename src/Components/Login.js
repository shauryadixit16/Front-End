import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
const Login = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state, Setstate] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const onchange = (e) => {
    Setstate({ ...state, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return M.toast({
        html: 'Please Enter all the fields',
        displayLength: 3000,
      });
    }
    console.log(email, password);
    // API CALL
    Setstate({ email: '', password: '' });
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
            Login <i class='fas fa-sign-in-alt'></i>
          </h5>

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
                      type='email'
                      name='email'
                      id='email'
                      value={email}
                      onChange={onchange}
                    />
                    <label for='email'>Enter your Email / Username</label>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={onchange}
                    />
                    <label for='password'>Enter your Password</label>
                  </div>

                  <label
                    style={{ float: 'right', marginTop: 20, fontSize: 15 }}
                  >
                    <a class='pink-text' href='#!'>
                      <b>Forgot Password?</b>
                    </a>
                  </label>
                </div>

                <br />
                <center>
                  <div class='row'>
                    <button
                      class='btn waves-effect waves-light btn-large'
                      style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                      type='submit'
                      onClick={onsubmit}
                    >
                      Submit
                      <i class='material-icons right'>send</i>
                    </button>
                  </div>
                  <h5 style={{ marginBottom: 20, marginTop: 35 }}>
                    Don't have an account?{' '}
                    <span>
                      {' '}
                      <a
                        href='#!'
                        style={{
                          color: '#43cea2',
                          fontWeight: '600',
                          fontSize: 25,
                        }}
                      >
                        Register
                      </a>
                    </span>{' '}
                  </h5>
                </center>
              </form>
            </div>
          </div>
        </center>
      </main>
    </body>
  );
};

export default Login;
