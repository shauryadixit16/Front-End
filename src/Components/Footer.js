import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
const Footer = () => {
  return (
    <footer
      className='page-footer'
      style={{ backgroundColor: '#fafafa', color: 'black' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col l6 offset-l1 s12'>
            <h2 href='#!'>Contact Us</h2>
            <div className='row'>
              <form className='col s12'>
                <div className='row'>
                  <div className='input-field'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                      id='icon_prefix'
                      type='text'
                      className='validate'
                      placeholder='Name'
                    />
                  </div>
                  <div className='input-field '>
                    <i className='material-icons prefix'>mail</i>
                    <input
                      id='icon_mail'
                      type='email'
                      className='validate'
                      placeholder='Email'
                    />
                  </div>
                  <div className='input-field '>
                    <i className='material-icons prefix'>phone</i>
                    <input
                      id='icon_telephone'
                      type='tel'
                      className='validate'
                      placeholder='Contact No.'
                    />
                  </div>
                  <div className='input-field'>
                    <i className='material-icons prefix'>mode_edit</i>
                    <textarea
                      id='icon_prefix2'
                      className='materialize-textarea'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
              </form>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
                style={{ backgroundColor: '#59dead' }}
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
          <div className='col l3 offset-l2 s12' style={{ paddingTop: 10 }}>
            <ul style={{ fontSize: 18 }}>
              <li style={{ fontSize: 22 }}>
                <a href='/#aboutus' style={{ color: 'black' }}>
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
                      style={{ color: '#59dead' }}
                    >
                      <i className='fa fa-envelope fa-2x' aria-hidden='true'></i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      href='https://www.instagram.com/invites/contact/?i=4sf6bfv12rne&utm_content=j2yo9za'
                      style={{ color: '#59dead' }}
                    >
                      <i className='fab fa-instagram fa-2x'></i>
                    </a>
                  </span>
                </p>
                <p style={{ marginTop: 20 }}>
                  <span>
                    <a style={{ color: '#59dead' }} href='tel:7814969071'>
                      <i className='fa fa-phone fa-2x' aria-hidden='true'></i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      style={{ color: '#59dead' }}
                      href='https://www.linkedin.com/company/gateway-of-employment'
                    >
                      <i className='fab fa-linkedin fa-2x'></i>
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container' style={{ textAlign: 'center', color: 'black' }}>
          © 2020 Copyright Text
        </div>
      </div>
    </footer>
  );
};
export default Footer;
