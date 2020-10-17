import React, { Component, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import RenderJob from '../Components/JobComponent';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class Job extends Component{

    constructor(props){
        super(props);
        var {jobs} = this.props.Store;
        if(jobs.length === 0){
            this.props.Store.getJobData();
        }
        this.state={}
    }

    render(){
        console.log(this.props.Store);
        const job1={
            id:1,
            title:'Software Engineer',
            subtitle:'C++,Python',
            desc:'lorem ipsum text big enought to cover about three lines'
        }
        const job = this.props.Store.jobs[0];
        return(
            <div className="container">
                <div className='col-12'>
                    <h3 className="text-center">Jobs</h3>
                    <hr />
                </div>
                <div className="row">
                    <div key={job1.id} className="col-12 col-md-4 mt-5">
                        <RenderJob job={this.props.Store.jobs[0]} id={job1.id} title={job1.title} subtitle={job1.subtitle} desc={job1.desc}/>
                    </div>
                    <div key={job1.id} className="col-12 col-md-4 mt-5">
                        <RenderJob id={job1.id} title={job1.title} subtitle={job1.subtitle} desc={job1.desc}/>
                    </div>
                    <div key={job1.id} className="col-12 col-md-4 mt-5">
                        <RenderJob id={job1.id} title={job1.title} subtitle={job1.subtitle} desc={job1.desc}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(Job);

/*
    To identify an empty object
    Object.keys(obj).length === 0 && obj.constructor === Object
*/