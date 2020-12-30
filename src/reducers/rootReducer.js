const initState = {
    jobs: [],
    internships: [],
    user:{}
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
    else if (action.type==="USER_INFO"){
        state = {
            ...state,
            user: action.userData,
        }
    }

    return state;
}

export default rootReducer;