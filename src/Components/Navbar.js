import React,{ Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {Navbar,NavItem,NavbarBrand,Collapse,NavbarToggler,Nav,Button, NavbarText} from 'reactstrap';
import Modal from 'react-modal';
import Signup from '../Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavTop extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModelOpen:false,
            selected:"",
            currentUser:"",
            userName:"",
        }
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }

    componentDidMount(){
        const user = localStorage.getItem('userToken');
        if(user!==null){
            const userName = jwt_decode(user).userName;
            if(user){
                this.setState({
                    currentUser: user,
                    userName:userName,
                });
            }
        }
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        if(this.state.currentUser===""){
            this.setState({
                isModelOpen: !this.state.isModelOpen
            });
        }
        else{
            this.userLogout();
        }
    }

    userLogout = () => {
        localStorage.removeItem('userToken');
        this.setState({
            currentUser:undefined,
            selected:"",
        })
        this.props.history.push('/');
        window.location.reload(false);
    }

    render(){

        return(
            <Navbar className="navbarblue" expand="lg">
                    <NavbarBrand  href="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo_nav.png'}  alt="GOE" className="mr-1 nav-logo"></img>
                        <span className="companyname">GOE</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className="navbartoggler"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/" onClick={()=>{this.setState({selected:"home",isNavOpen: !this.state.isNavOpen})}}>
                                    HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/jobs" className="nav-link" onClick={()=>{this.setState({selected:"job",isNavOpen: !this.state.isNavOpen})}}>
                                    JOBS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/internships" className="nav-link" onClick={()=>{this.setState({selected:"in",isNavOpen: !this.state.isNavOpen})}}>
                                    INTERNSHIPS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus" onClick={this.toggleNav}>
                                    CONTACT US
                                </NavLink>
                            </NavItem>
                            {this.state.currentUser!==""?
                            <NavItem>
                                <NavLink className="nav-link" to={`/profile/${this.state.userName}`}>
                                    {this.state.userName}
                                </NavLink>
                            </NavItem>
                            :null}
                        </Nav>
                        <Nav navbar>
                        {this.state.currentUser!=="" && <NavItem>
                                <NavLink className="nav-link" to="/profile" onClick={this.toggleNav}>
                                    MY PROFILE
                                </NavLink>
                            </NavItem>}
                            <NavItem>
                                <Button outline onClick={this.toggleModal} className="login-button">
                                    {this.state.currentUser!==""?"LOGOUT":"LOGIN/SIGNUP"}
                                </Button>
                                <Modal isOpen={this.state.isModelOpen} onRequestClose={()=>{this.setState({isModelOpen:false})}}>
                                    <Signup/>
                                </Modal>
                            </NavItem>
                        </Nav>
                    <div  id="hiddentext">
                        <NavbarText>
                        Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites
                        </NavbarText>
                    </div>
                    </Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavTop);