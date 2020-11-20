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
        console.log(this.props.jobs)
        const jobs = this.props.jobs;
        const jobs2=[
            {
                address: "201 Anmol Sagar Darshan, 9/1 New palasia, near mangilal Dhoodh wala, Indore",
                desc: "To Handle GST Working at the office.",
                employer: "5f5b8bce2d23f7001746d920",
                employerName: "raja_2208",
                fromHome: false,
                fullTime: true,
                permanent: true,
                reason: "Get full exposure of Independent working in GST Regime↵↵↵↵↵↵↵↵↵↵↵↵↵↵",
                reqs: "At least 1-2 year Experience of practical working. Proficient in GST compliance is required. Person having post Articleship Experience in any Good CA office will be given preference.",
                salary: "20000 to 25000",
                title: "Chartered Accountant ",
                __v: 0,
                _id: "5f638af849f8690017676ce1"
            },
            {
                address: "201 Anmol Sagar Darshan, 9/1 New palasia, near mangilal Dhoodh wala, Indore",
                desc: "This is a software development Job wherein you need to be bla bla bla bla",
                employer: "5f5b8bce2d23f7001746d920",
                employerName: "Google",
                fromHome: false,
                fullTime: false,
                permanent: true,
                reason: "Get full exposure of Independent working in GST Regime↵↵↵↵↵↵↵↵↵↵↵↵↵↵",
                reqs: "At least 1-2 year Experience of practical working. Proficient in GST compliance is required. Person having post Articleship Experience in any Good CA office will be given preference.",
                salary: "20000 to 25000",
                title: "Software Engineer",
                __v: 0,
                _id: "5f638af849f8690017576ce1"
            },
            {
                address: "201 Anmol Sagar Darshan, 9/1 New palasia, near mangilal Dhoodh wala, Indore",
                desc: "This is a teaching job wherein you have to give a lot of assignments all the time",
                employer: "5f5b8bce2d23f7001746d920",
                employerName: "IIT Jodhpur",
                fromHome: false,
                fullTime: false,
                permanent: true,
                reason: "Get full exposure of Independent working in GST Regime↵↵↵↵↵↵↵↵↵↵↵↵↵↵",
                reqs: "At least 1-2 year Experience of practical working. Proficient in GST compliance is required. Person having post Articleship Experience in any Good CA office will be given preference.",
                salary: "20000 to 25000",
                title: "Software Engineer",
                __v: 0,
                _id: "5f938af849f8690017576ce1"
            },
            {
                address: "201 Anmol Sagar Darshan, 9/1 New palasia, near mangilal Dhoodh wala, Indore",
                desc: "This is a management Job wherein you need to be",
                employer: "5f5b8bce2d23f7001746d920",
                employerName: "PCTE group of colleges",
                fromHome: false,
                fullTime: false,
                permanent: true,
                reason: "Get full exposure of Independent working in GST Regime↵↵↵↵↵↵↵↵↵↵↵↵↵↵",
                reqs: "At least 1-2 year Experience of practical working. Proficient in GST compliance is required. Person having post Articleship Experience in any Good CA office will be given preference.",
                salary: "20000 to 25000",
                title: "Managing Director",
                __v: 0,
                _id: "5f638bf849f8690017576ce1"
            },
            {
                address: "201 Anmol Sagar Darshan, 9/1 New palasia, near mangilal Dhoodh wala, Indore",
                desc: "This is a hardware development Job wherein you need to be bla bla bla bla xyz xyz xyz xy z xy z",
                employer: "5f5b8bce2d23f7001746d920",
                employerName: "Facebook",
                fromHome: false,
                fullTime: false,
                permanent: true,
                reason: "Get full exposure of Independent working in GST Regime↵↵↵↵↵↵↵↵↵↵↵↵↵↵",
                reqs: "At least 1-2 year Experience of practical working. Proficient in GST compliance is required. Person having post Articleship Experience in any Good CA office will be given preference.",
                salary: "20000 to 25000",
                title: "Hardware Engineer",
                __v: 0,
                _id: "5f638af849f8699017576ce1"
            }
            
        ]
        const Job=jobs.map((job)=>{
            return(
                <div key={job._id} className="col-12 col-md-4 mt-5 d-flex align-content-center">
                        <RenderJob id={job._id} title={job.title} subtitle={job.employerName} desc={job.desc} timing={job.fullTime} address={job.address} salary={job.salary} reqs={job.reqs} reason={job.reason} perm={job.permanent}/>
                </div>
            )
        })
        return(
            <div className="container">
                <div className='col-12'>
                    <h3 className="text-center">Jobs</h3>
                    <hr />
                </div>
                
                <div className="row">
                    {Job}
                   {/* {Job} */}
                   {/* <div key="1" className="col-12 col-md-4 mt-5">
                        <RenderJob id='1234' title='Software engineer' subtitle='Google' 
                        desc='This is a software development Job wherein you need to be bla bla bla bla' timing={true}/>
                    </div> */}
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