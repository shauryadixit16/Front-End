import { getInList, getJobList } from '../api/Offer';
import {signin , register} from '../api/Auth';
export const requestJobs = () => {
    return async (dispatch, getState) => {
        const result = await getJobList();
        dispatch({ type:"STORE_JOBS", jobs: result.jobs });
    }
}

export const requestInts = () => {
    return async (dispatch, getState) => {
        const result = await getInList();
        dispatch({ type:"STORE_INTS", internships: result.internships });
    }
}
export const Register = (info , reg) => {
    return async () => {
        const result = await register(info,reg);
        // localStorage.setItem("userToken" , result.token);
    }
}
export const login = (email , pass) => {
    return async () => {
        const result = await signin(email,pass);
        // localStorage.setItem("userToken" , result.token);
    }
}
