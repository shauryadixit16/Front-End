import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <p>Profile Page</p>
        )
    }
}
export default withRouter(Profile);