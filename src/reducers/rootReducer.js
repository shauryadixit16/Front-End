const initState = {
    jobs: [],
    internships: [],
    user:{},
    students : [],
    recruiters: [],
    filtered : {},
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
    else if (action.type==="SEARCH_COMP"){
        state = {
            ...state,
            filtered: state.recruiters.filter(x => {
                const regex = new RegExp(`${action.text}`,'gi');
                return x.name.match(regex);
            }),
        }
    }
    else if (action.type==="SEARCH_INTERN"){
        state = {
            ...state,
            filtered: state.students.filter(x => {
                const regex = new RegExp(`${action.text}`,'gi');
                return x.name.match(regex);
            }),
        }
    }
    else if(action.type === "CLEAR_SEARCH"){
        state ={
            ...state,
            filtered : null
        }
    }
    return state;
}

export default rootReducer;