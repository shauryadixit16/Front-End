import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
const Signup = () => {
  useEffect(() => {
    M.AutoInit();
  });
  const [state, Setstate] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    username: '',
    modal: false,
  });
  const { name, email, password, password2, modal, username } = state;

  const onchange = (e) => {
    Setstate({ ...state, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || username === '') {
      return M.toast({
        html: 'Please Enter all the fields',
        displayLength: 3000,
      });
    }
    if (password !== password2) {
      return M.toast({
        html: 'Make sure to enter the same password ',
        displayLength: 3000,
      });
    }
    return Setstate({ ...state, modal: true });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    // API CALL
    M.toast({ html: 'You have been Registered', displayLength: 3000 });
    Setstate({
      name: '',
      email: '',
      password: '',
      password2: '',
      modal: false,
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
          <h5 className='heading' style={{ color: '#59dead' }}>
            Register <i class='fas fa-sign-in-alt'></i>
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
                      type='text'
                      name='name'
                      id='name'
                      value={name}
                      onChange={onchange}
                    />
                    <label for='name'>Name</label>
                  </div>
                </div>
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='text'
                      name='username'
                      id='username'
                      value={username}
                      onChange={onchange}
                    />
                    <label for='username'>Username</label>
                  </div>
                </div>
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
                    <label for='email'>Email</label>
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
                    <label for='password'>Password</label>
                  </div>
                </div>
                <div class='row'>
                  <div class='input-field col s12'>
                    <input
                      class='validate'
                      type='password'
                      name='password2'
                      id='password2'
                      value={password2}
                      onChange={onchange}
                    />
                    <label for='password2'>Confirm Password</label>
                  </div>
                </div>

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
                        class='btn waves-effect waves-light btn-large'
                        style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                        type='submit'
                        onClick={onsubmit}
                      >
                        Submit
                        <i class='material-icons right'>send</i>
                      </button>
                    )}
                  </div>
                  <h5 style={{ marginBottom: 20, marginTop: 35 }}>
                    Already have an account?{' '}
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
                        Login
                      </a>
                    </span>{' '}
                  </h5>

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
};

export default Signup;
