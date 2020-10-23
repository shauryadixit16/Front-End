import { getInList, getJobList } from '../api/Offer';

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