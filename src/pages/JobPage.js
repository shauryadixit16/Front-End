import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import RenderJob from '../Components/JobComponent';
import { connect } from 'react-redux';
import { requestJobs } from '../actions/asyncActions';

class Job extends Component{

    componentDidMount(){
        if(this.props.jobs.length===0){
            this.props.requestJobs();
        }
    }

    render(){
        const job1={
            id:1,
            title:'Software Engineer',
            subtitle:'C++,Python',
            desc:'lorem ipsum text big enought to cover about three lines'
        }
        const jobs = this.props.jobs;
        return(
            <div className="container">
                <div className='col-12'>
                    <h3 className="text-center">Jobs</h3>
                    <hr />
                </div>
                <div className="row">
                    <div key={job1.id} className="col-12 col-md-4 mt-5">
                        <RenderJob job={this.props.jobs} id={job1.id} title={job1.title} subtitle={job1.subtitle} desc={job1.desc}/>
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

const getPropsFromState = (state) => {
    return {
        jobs: state.jobs,
    }
}

const getDispatchFunctions = (dispatch) => {
    return {
        requestJobs: () => { dispatch(requestJobs()) },
    }
}

export default withRouter(connect(getPropsFromState, getDispatchFunctions)(Job));

/*
    To identify an empty object
    Object.keys(obj).length === 0 && obj.constructor === Object
*/