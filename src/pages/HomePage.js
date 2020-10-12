import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Welcome from '../Components/Welcome';


class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Welcome/>
        )
    }
}
export default withRouter(Home);