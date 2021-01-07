import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {ClearFilter, search} from '../actions/asyncActions';
import {withRouter} from 'react-router-dom'
 const Search = ({filtered ,user, search , ClearFilter}) => {
  // useEffect(() => {
  //   if (filtered === null) {
  //  Setstate('');
  //   }
  // });
const [state,Setstate] = useState('');
//user.category = 'Employee';

    const filter = (e) => {
      e.preventDefault()
        if(state !== ''){
          // comp means searching for company so student is logged in 
          {user.category === 'Employee' ?  search('comp',state) :  search('intern',state)}
        }
        else{
    ClearFilter();
        }
        //console.log(state);
    }
    const pl = user.category === 'Employee' ? 'Recruiters' : 'Students';

    return (
        <div className=" search container mt-5">
          <div class="row">
        <div class="input-field col s6">
          <input placeholder={`Search For ${pl}`} id="first_name" type="text" value={state}
                      onChange = {(e) => Setstate(e.target.value)}
                       class="validate"/>
        </div>
      </div>
      <button
                      class='btn waves-light'
                      style={{ backgroundColor: '#59dead', marginBottom: 15 }}
                      type='submit'
                      onClick={filter}
                    >
                      Search
                      <i class='material-icons right'>search</i>
                    </button>
        </div>
    )
}

const getPropsFromState = (state) => {
    return {
        filtered : state.filtered,
        user : state.user,
    }
  }
const getDispatchFunctions = (dispatch) => {
    return {
        search: () => { dispatch(search()) },
        ClearFilter : () => {dispatch(ClearFilter())}
    }
  }
  
  export default withRouter(connect(getPropsFromState,getDispatchFunctions)(Search));
  