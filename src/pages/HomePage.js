import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Welcome from '../Components/Welcome';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Welcome/>
            <AboutUs/>
            <Footer/>
            </>
        )
    }
}
export default withRouter(Home);