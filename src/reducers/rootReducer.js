const initState = {
    jobs: [],
    internships: [],
}

const rootReducer = (state= initState, action) => {
    if (action.type==="STORE_JOBS"){
        state = {
            ...state,
            jobs: action.jobs,
        }
    }
    else if (action.type==="STORE_INTS"){
        state = {
            ...state,
            internships: action.internships,
        }
    }

    return state;
}

export default rootReducer;