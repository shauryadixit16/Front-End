import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
const Footer = () => {
  return (
    <footer
      class='page-footer'
      style={{ backgroundColor: '#fafafa', color: 'black' }}
    >
      <div class='container'>
        <div class='row'>
          <div class='col l6 offset-l1 s12'>
            <h2 href='#!'>Contact Us</h2>
            <div class='row'>
              <form class='col s12'>
                <div class='row'>
                  <div class='input-field'>
                    <i class='material-icons prefix'>account_circle</i>
                    <input
                      id='icon_prefix'
                      type='text'
                      class='validate'
                      placeholder='Name'
                    />
                  </div>
                  <div class='input-field '>
                    <i class='material-icons prefix'>mail</i>
                    <input
                      id='icon_mail'
                      type='email'
                      class='validate'
                      placeholder='Email'
                    />
                  </div>
                  <div class='input-field '>
                    <i class='material-icons prefix'>phone</i>
                    <input
                      id='icon_telephone'
                      type='tel'
                      class='validate'
                      placeholder='Contact No.'
                    />
                  </div>
                  <div class='input-field'>
                    <i class='material-icons prefix'>mode_edit</i>
                    <textarea
                      id='icon_prefix2'
                      class='materialize-textarea'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
              </form>
              <button
                class='btn waves-effect waves-light'
                type='submit'
                name='action'
                style={{ backgroundColor: '#59dead' }}
              >
                Submit
                <i class='material-icons right'>send</i>
              </button>
            </div>
          </div>
          <div class='col l3 offset-l2 s12' style={{ paddingTop: 10 }}>
            <ul style={{ fontSize: 18 }}>
              <li style={{ fontSize: 22 }}>
                <a href='#!' style={{ color: 'black' }}>
                  <p>About us</p>
                </a>
              </li>
              <li style={{ fontSize: 22 }}>
                <a href='#!' style={{ color: 'black' }}>
                  <p>Privacy policy</p>
                </a>
              </li>
              <li style={{ fontSize: 22 }}>
                <a href='#!' style={{ color: 'black' }}>
                  <p>Terms & Conditions</p>
                </a>
              </li>
              <li style={{ marginTop: 40 }}>
                {' '}
                <p>
                  <span>
                    <a
                      href='mailto:goe.cohest@gmail.com'
                      style={{ backgroundColor: '#59dead' }}
                    >
                      <i class='material-icons prefix'>mail</i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      href='https://www.instagram.com/invites/contact/?i=4sf6bfv12rne&utm_content=j2yo9za'
                      style={{ backgroundColor: '#59dead' }}
                    >
                      <i class='fab fa-instagram'></i>
                    </a>
                  </span>
                </p>
                <p style={{}}>
                  <span>
                    <a
                      style={{ backgroundColor: '#59dead' }}
                      href='tel:7814969071'
                    >
                      <i class='material-icons prefix'>phone</i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      style={{ backgroundColor: '#59dead' }}
                      href='https://www.linkedin.com/company/gateway-of-employment'
                    >
                      <i className='fab fa-linkedin'></i>
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='footer-copyright'>
        <div class='container' style={{ textAlign: 'center', color: 'black' }}>
          © 2020 Copyright Text
        </div>
      </div>
    </footer>
  );
};
export default Footer;
