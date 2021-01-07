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
    return async (dispatch) => {
        const result = await register(info,reg);
            if(result.success == true){
                dispatch({type :"USER_INFO", user : result.userData});
            }
            else{
            console.log(result.msg);
            }
        localStorage.setItem("userToken" , result.token);
    }
}

export const login = (email , pass) => {
    return async (dispatch) => {
        console.log(email,pass);
        const result = await signin(email,pass);
        if(result.success == true){
            dispatch({type :"USER_INFO", user : result.userData});
        }
        else{
        console.log(result.msg);
        }
    localStorage.setItem("userToken" , result.token);
    }
}

export const search = (who , text) => {
    return async (dispatch) => {
        console.log(who,text);
        if(who == 'comp'){  
        dispatch({type : 'SEARCH_COMP' , text})
        }
        else{
            dispatch({type : 'SEARCH_INTERN' , text})
        }
    }
}

export const ClearFilter = () => {
    return async (dispatch) => {
        dispatch({type : "CLEAR_SEARCH"});
    }
}

