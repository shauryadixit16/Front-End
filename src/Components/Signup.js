import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Link , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Register} from '../actions/asyncActions';
const Signup = ({Register}) => {
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
    if(password.length < 8){
      return M.toast({
        html: 'Password should be of atleast 8 characters',
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

  const reg = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    
    // API CALL
    Register( {name,email,password,username},2)
    
    M.toast({ html: 'You have been successfully Registered', displayLength: 3000 });
    Setstate({
      name: '',
      email: '',
      password: '',
      password2: '',
      username:'',
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
                        class='btn  waves-light btn-large modal-trigger'
                        style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                        type='submit'
                        href='#modal1'
                      >
                        TnC
                        <i class='material-icons right'>send</i>
                      </button>
                    ) : (
                      <button
                        class='btn  waves-light'
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
                      <Link
                      exact
                        to='/login'
                        style={{
                          color: '#43cea2',
                          fontWeight: '600',
                          fontSize: 25,
                        }}
                      >
                        Login
                      </Link>
                    </span>{' '}
                  </h5>

                  <div id='modal1' class='modal'>
                    <div class='modal-content'>
                      <h4>Terms & Conditions</h4>
                      <p>
                      1. Introduction
Welcome to Gateway of Employment (“Company”, “we”, “our”, “us”)!
These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at
 <a href="http://www.findpathway.com/" target="_blank">www.findpathway.com HYPERLINK "http://www.findpathway.com/" HYPERLINK
"http://www.findpathway.com/"(together or individually “Service”) operated by Gateway Of
Employment. HYPERLINK "http://www.findpathway.com/"</a>
Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard
and disclose information that results from your use of our web pages.
Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You
acknowledge that you have read and understood Agreements, and agree to be bound of them.
If you do not agree with (or cannot comply with) Agreements, then you may not use the Service,
but please let us know by emailing at 
<a href="mailto:geo.cohest@gmail.com" target="_blank">goe.cohest@gmail.com HYPERLINK
"mailto:geo.cohest@gmail.com" HYPERLINK "mailto:geo.cohest@gmail.com"so we can try to find
a solution. These Terms apply to all visitors, users and others who wish to access or use
Service. HYPERLINK "mailto:geo.cohest@gmail.com"</a>
2. Communications
By using our Service, you agree to subscribe to newsletters, marketing or promotional materials
and other information we may send. However, you may opt out of receiving any, or all, of these
communications from us by following the unsubscribe link or by emailing at
geo.cohest@gmail.com HYPERLINK "mailto:geo2208@yahoo.com" HYPERLINK
"mailto:geo2208@yahoo.com". HYPERLINK "mailto:geo2208@yahoo.com"
3. Purchases
If you wish to purchase any product or service made available through Service (“Purchase”),
you may be asked to supply certain information relevant to your Purchase including but not
limited to, your credit or debit card number, the expiration date of your card, your billing address,
and your shipping information.
You represent and warrant that: (i) you have the legal right to use any card(s) or other payment
method(s) in connection with any Purchase of Service; and that (ii) the information you supply to
us is true, correct and complete.
We may employ the use of third party services for the purpose of facilitating payment and the
completion of Purchases. By submitting your information, you grant us the right to provide the
information to these third parties subject to our Privacy Policy.
We reserve the right to refuse or cancel your order at any time for reasons including but not
limited to: product or service availability, errors in the description or price of the product or
service, error in your order or other reasons.
We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal
transaction is suspected.
NOTE: At this point, we are providing the service free of cost, but with due course of time,
considerable charges will be imposed.
4. Contests, Sweepstakes and Promotions
Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available
through Service may be governed by rules that are separate from these Terms of Service. If you
participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If
the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
5. Refund Policy
Stating in interest of recuriters, that if an employee resigns the job within 60 days , counted from
the date of effect of the contract between employer and the employee , then either 75% of the
acquired commission is refunded to the recruiter or we will on our behalf recommend maximum
of two employees without asking for any kind of commission. If the recruiter goes for the latter,
then in that case, the second employee is provided if and only if the first employee resigns

before a tenure of 60 days. If the first employee sustains for a period longer that 60 days, then
in that case, we will NOT be providing the second employee without commission. But after the
third resignation of the employee, we fail to provide you with any such scheme. Three
resignations will blacklist your organization meaning in future you will not be able to avail any of
the stated policies. This policy prevails for only a particular job stated classified under.
6. Content
Our Service allows you to post, link, store, share and otherwise make available certain
information, text, graphics, videos, or other material (“Content”). You are responsible for Content
that you post on or through Service, including its legality, reliability, and appropriateness.
By posting Content on or through Service, You represent and warrant that: (i) Content is yours
(you own it) and/or you have the right to use it and the right to grant us the rights and license as
provided in these Terms, and (ii) that the posting of your Content on or through Service does not
violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any
person or entity. We reserve the right to terminate the account of anyone found to be infringing
on a copyright.
You retain any and all of your rights to any Content you submit, post or display on or through
Service and you are responsible for protecting those rights. We take no responsibility and
assume no liability for Content you or any third party posts on or through Service. However, by
posting Content using Service you grant us the right and license to use, modify, publicly
perform, publicly display, reproduce, and distribute such Content on and through Service. You
agree that this license includes the right for us to make your Content available to other users of
Service, who may also use your Content subject to these Terms.
Gateway of Employment has the right but not the obligation to monitor and edit all Content
provided by users.
In addition, Content found on or through this Service are the property of Gateway of
Employment or used with permission. You may not distribute, modify, transmit, reuse,
download, repost, copy, or use said Content, whether in whole or in part, for commercial
purposes or for personal gain, without express advance written permission from us.
8. Prohibited Uses
You may use Service only for lawful purposes and in accordance with Terms. You agree not to
use Service:
In any way that violates any applicable national or international law or regulation.
For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by
exposing them to inappropriate content or otherwise.
To transmit, or procure the sending of, any advertising or promotional material, including any
“junk mail”, “chain letter,” “spam,” or any other similar solicitation.
To impersonate or attempt to impersonate Company, a Company employee, another user, or
any other person or entity.
In any way that infringes upon the rights of others, or in any way is illegal, threatening,
fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful
purpose or activity.
To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service,
or which, as determined by us, may harm or offend Company or users of Service or expose
them to liability.
Additionally, you agree not to:
Use Service in any manner that could disable, overburden, damage, or impair Service or
interfere with any other party’s use of Service, including their ability to engage in real time
activities through Service.
Use any robot, spider, or other automatic device, process, or means to access Service for any
purpose, including monitoring or copying any of the material on Service.
Use any manual process to monitor or copy any of the material on Service or for any other
unauthorized purpose without our prior written consent.
Use any device, software, or routine that interferes with the proper working of Service.
Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or
technologically harmful.

Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service,
the server on which Service is stored, or any server, computer, or database connected to
Service.
Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
Take any action that may damage or falsify Company rating.
Otherwise attempt to interfere with the proper working of Service.
Analytics: We may use third-party Service Providers to monitor and analyze the use of our
Service.
9. No Use By Minors
Service is intended only for access and use by individuals at least eighteen (18) years old. By
accessing or using Service, you warrant and represent that you are at least eighteen (18) years
of age and with the full authority, right, and capacity to enter into this agreement and abide by all
of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are
prohibited from both the access and usage of Service.
10. Accounts
When you create an account with us, you guarantee that you are above the age of 18, and that
the information you provide us is accurate, complete, and current at all times. Inaccurate,
incomplete, or obsolete information may result in the immediate termination of your account on
Service.
You are responsible for maintaining the confidentiality of your account and password, including
but not limited to the restriction of access to your computer and/or account. You agree to accept
responsibility for any and all activities or actions that occur under your account and/or password,
whether your password is with our Service or a third-party service. You must notify us
immediately upon becoming aware of any breach of security or unauthorized use of your
account.
You may not use as a username the name of another person or entity or that is not lawfully
available for use, a name or trademark that is subject to any rights of another person or entity
other than you, without appropriate authorization. You may not use as a username any name
that is offensive, vulgar or obscene.
We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel
orders in our sole discretion.
11. Intellectual Property
Service and its original content (excluding Content provided by users), features and functionality
are and will remain the exclusive property of Gateway of Employment and its licensors. Service
is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks
may not be used in connection with any product or service without the prior written consent of
Gateway of Employment.
12. Copyright Policy
We respect the intellectual property rights of others. It is our policy to respond to any claim that
Content posted on Service infringes on the copyright or other intellectual property rights
(“Infringement”) of any person or entity.
If you are a copyright owner, or authorized on behalf of one, and you believe that the
copyrighted work has been copied in a way that constitutes copyright infringement, please
submit your claim via email to <a href="mailto:geo.cohest@gmail.com" target="_blank">goe.cohest@gmail.com HYPERLINK
"mailto:geo.cohest@gmail.com" HYPERLINK "mailto:geo.cohest@gmail.com", with the subject
line: “Copyright Infringement” and include in your claim a detailed description of the alleged
Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement
Claims” HYPERLINK "mailto:geo.cohest@gmail.com"</a>
You may be held accountable for damages (including costs and attorneys’ fees) for
misrepresentation or bad-faith claims on the infringement of any Content found on and/or
through Service on your copyright.
13. DMCA Notice and Procedure for Copyright Infringement
Claims

You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by
providing our Copyright Agent with the following information in writing (see 17 U.S.C 512©(3) for
further detail):
an electronic or physical signature of the person authorized to act on behalf of the owner of the
copyright’s interest;
a description of the copyrighted work that you claim has been infringed, including the URL (i.e.,
web page address) of the location where the copyrighted work exists or a copy of the
copyrighted work;
identification of the URL or other specific location on Service where the material that you claim
is infringing is located;
your address, telephone number, and email address;
a statement by you that you have a good faith belief that the disputed use is not authorized by
the copyright owner, its agent, or the law;
a statement by you, made under penalty of perjury, that the above information in your notice is
accurate and that you are the copyright owner or authorized to act on the copyright owner’s
behalf.
You can contact our Copyright Agent via email at <a href="mailto:geo.cohest@gmail.com" target="_blank">goe.cohest@gmail.com HYPERLINK
"mailto:geo.cohest@gmail.com" HYPERLINK "mailto:geo.cohest@gmail.com". HYPERLINK
"mailto:geo.cohest@gmail.com"</a>
14. Error Reporting and Feedback
You may provide us either directly at <a href="mailto:geo.cohest@gmail.com" target="_blank">
  goe.cohest@gmail.com HYPERLINK
  "mailto:geo.cohest@gmail.com" HYPERLINK "mailto:geo.cohest@gmail.com"or via third party
  sites and tools with information and feedback concerning errors, suggestions for improvements,
  ideas, problems, complaints, and other matters related to our Service (“Feedback”). You
  acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property
  right or other right, title or interest in or to the Feedback; (ii) Company may have development
  ideas similar to the Feedback; (iii) Feedback does not contain confidential information or
  proprietary information from you or any third party; and (iv) Company is not under any obligation
  of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the
  Feedback is not possible due to applicable mandatory laws, you grant Company and its
  affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and
  perpetual right to use (including copy, modify, create derivative works, publish, distribute and
  commercialize) Feedback in any manner and for any purpose. HYPERLINK
  "mailto:geo.cohest@gmail.com"
</a>
15. Links To Other Web Sites
Our Service may contain links to third party web sites or services that are not owned or
controlled by Gateway of Employment.
Gateway of Employment has no control over, and assumes no responsibility for the content,
privacy policies, or practices of any third party web sites or services. We do not warrant the
offerings of any of these entities/individuals or their websites.
YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED
TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH
CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD
PARTY WEB SITES OR SERVICES.
WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
16. Disclaimer Of Warranty
THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE”
BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND,
EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE
INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY
AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES
OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY

WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED
WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT,
OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE
CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE
FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR
ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE
MEET YOUR NEEDS OR EXPECTATIONS.
COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
PARTICULAR PURPOSE.
THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
17. Limitation Of Liability
EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE,
SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES
(INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF
LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR
NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF
CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN
CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM
FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT
AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES,
RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF
THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS
LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT
PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL
THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW
THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL
DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
18. Termination
We may terminate or suspend your account and bar access to Service immediately, without
prior notice or liability, under our sole discretion, for any reason whatsoever and without
limitation, including but not limited to a breach of Terms.
If you wish to terminate your account, you may simply discontinue using Service.
All provisions of Terms which by their nature should survive termination shall survive
termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity
and limitations of liability.
19. Governing Law
These Terms shall be governed and construed in accordance with the laws of India/ Madhya
Pradesh, which governing law applies to agreement without regard to its conflict of law
provisions.
Our failure to enforce any right or provision of these Terms will not be considered a waiver of
those rights. If any provision of these Terms is held to be invalid or unenforceable by a court,
the remaining provisions of these Terms will remain in effect. These Terms constitute the entire
agreement between us regarding our Service and supersede and replace any prior agreements
we might have had between us regarding Service.
20. Changes To Service
We reserve the right to withdraw or amend our Service, and any service or material we provide
via Service, in our sole discretion without notice. We will not be liable if for any reason all or any

part of Service is unavailable at any time or for any period. From time to time, we may restrict
access to some parts of Service, or the entire Service, to users, including registered users.
21. Amendments To Terms
We may amend Terms at any time by posting the amended terms on this site. It is your
responsibility to review these Terms periodically.
Your continued use of the Platform following the posting of revised Terms means that you
accept and agree to the changes. You are expected to check this page frequently so you are
aware of any changes, as they are binding on you.
By continuing to access or use our Service after any revisions become effective, you agree to
be bound by the revised terms. If you do not agree to the new terms, you are no longer
authorized to use Service.
22. Waiver And Severability
No waiver by Company of any term or condition set forth in Terms shall be deemed a further or
continuing waiver of such term or condition or a waiver of any other term or condition, and any
failure of Company to assert a right or provision under Terms shall not constitute a waiver of
such right or provision.
If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be
invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to
the minimum extent such that the remaining provisions of Terms will continue in full force and
effect.
23. Acknowledgement
BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
THEM.
24. Contact Us
Please send your feedback, comments, requests for technical support by email:
<a href="mailto:geo.cohest@gmail.com" target="_blank">
  goe.cohest@gmail.com HYPERLINK "mailto:geo.cohest@gmail.com" HYPERLINK
  "mailto:geo.cohest@gmail.com".
</a>
                      </p>
                    </div>
                    <div class='modal-footer'>
                      <button
                        href='#!'
                        class='modal-close  waves-green btn-flat'
                        onClick={reg}
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

const getDispatchFunctions = (dispatch) => {
  return {
      Register: () => { dispatch(Register()) },
  }
}
export default withRouter(connect(null , getDispatchFunctions)(Signup));
