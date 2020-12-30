import React,{useEffect,useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Link} from 'react-router-dom';
const ContactUs = () => {

  useEffect(()=>{
    M.AutoInit();
  },[])

  const [state,Setstate] = useState({
    name: '',
    email:'',
    phone:'',
    msg:''
  })

  const {name , email , phone , msg} = state;

  const Change = (e) => {
    Setstate({...state , [e.target.name] : e.target.value});
  }

  const Submit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' ||  msg === ''){
      return M.toast({  
        html: 'Please Enter all the fields',
        displayLength: 3000,
      });
    }
    else{
    Setstate({
      name: '',
      email:'',
      phone:'',
      msg:''
    })
    return M.toast({  
      html: 'Thanks for Contacting with us!',
      displayLength: 3000,
    });


    // API CALL
    
  }
  }
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
              <ul>
                  <li className='input-field'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                      id='icon_prefix'
                      type='text'
                      name='name'
                      value={name}
                      onChange={Change}
                      className='validate'
                      placeholder='Name'
                    />
                  </li>
                  <li className='input-field '>
                    <i className='material-icons prefix'>mail</i>
                    <input
                      id='icon_mail'
                      name='email'
                      type='email'
                      value={email}
                      onChange={Change}
                      className='validate'
                      placeholder='Email'
                    />
                  </li>
                  <li className='input-field '>
                    <i className='material-icons prefix'>phone</i>
                    <input
                      id='icon_telephone'
                      name='phone'
                      value={phone}
                      onChange={Change}
                      type='tel'
                      className='validate'
                      placeholder='Contact No.'
                    />
                  </li>
                  <li className='input-field'>
                    <i className='material-icons prefix'>mode_edit</i>
                    <textarea
                      id='icon_prefix2'
                      name='msg'
                      value={msg}
                      onChange={Change}
                      className='materialize-textarea'
                      placeholder='Message'
                    ></textarea>
                  </li>
              <li className="mt-5">
                <button
                  className='btn waves-light'
                  type='submit'
                  name='action'
                  style={{ backgroundColor: '#59dead'}}
                  onClick={Submit}
                >
                  Submit
                  <i className='material-icons right'>send</i>
                </button>
              </li>
              </ul>
            </div>
          </div>
          <div className='col l3 offset-l2 offset-s2 s12 m12' style={{ paddingTop: 30 }}>
            <ul style={{ fontSize: 18 }}>
              <li style={{ fontSize: 22 }}>
                <Link to='/' style={{ color: 'black' }}>
                  <p>About us</p>
                </Link>
              </li>
              <li style={{ fontSize: 22 }}>
                <Link to='#!' style={{ color: 'black' }}>
                  <p>Privacy policy</p>
                </Link>
              </li>
              <li style={{ fontSize: 22 }}>
                <Link to='#!' style={{ color: 'black' }}>
                  <p>Terms & Conditions</p>
                </Link>
              </li>
              <li style={{ marginTop: 40 }}>
                {' '}
                <p>
                  <span>
                    <a
                      href='mailto:goe.cohest@gmail.com' target="_blank"
                      style={{ color: '#59dead' }}
                    >
                      <i className='fa fa-envelope fa-2x' aria-hidden='true'></i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      href='https://www.instagram.com/invites/contact/?i=4sf6bfv12rne&utm_content=j2yo9za' target="_blank"
                      style={{ color: '#59dead' }}
                    >
                      <i className='fab fa-instagram fa-2x'></i>
                    </a>
                  </span>
                </p>
                <p style={{ marginTop: 20 }}>
                  <span>
                    <a style={{ color: '#59dead' }} href='tel:7814969071' target="_blank">
                      <i className='fa fa-phone fa-2x' aria-hidden='true'></i>{' '}
                    </a>
                  </span>
                  <span style={{ marginLeft: 30 }}>
                    <a
                      style={{ color: '#59dead' }}
                      href='https://www.linkedin.com/company/gateway-of-employment' target="_blank"
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
    </footer>
  );
};
export default ContactUs;
