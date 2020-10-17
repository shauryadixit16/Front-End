import { observable, action } from 'mobx'
import {getJobList} from '../api/Offer';

class Store {
    @observable userData = {}

    @observable jobs = []

    @observable internships = []

    @action getJobData = async ()=>{
        const result = await getJobList();
        this.jobs = result.jobs;
        console.log(result.jobs)
    }
}

export default new Store();