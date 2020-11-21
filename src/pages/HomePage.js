import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Welcome from '../Components/Welcome';
import AboutUs from '../Components/AboutUs';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Welcome/>
            <AboutUs/>
            </>
        )
    }
}
export default withRouter(Home);