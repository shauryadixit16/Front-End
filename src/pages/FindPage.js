import React from 'react'
import Search from '../Components/Search';
import Filter from '../Components/Filter';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ClearFilter} from '../actions/asyncActions';
const FindPage = ({filtered , ClearFilter}) => {
   const onsubmit = (e) => {
       e.preventDefault();
       ClearFilter();
   }
   console.log(filtered)
    return (
        <div>
            {filtered === null ? (<Search/>) : 
            (
            <div>
            <Filter/>
            <div className="container mt-5">
                <button className="btn bg-dark" onClick={onsubmit}>Go Back</button>
            </div>
            </div>
                )
            }
            
        </div>
    )
}
const getPropsFromState = (state) => {
    return {
        filtered : state.filtered,
    }
  }
  const getDispatchFunctions = (dispatch) => {
    return {
        ClearFilter : () => {dispatch(ClearFilter())},
    }
  }
  export default withRouter(connect(getPropsFromState,getDispatchFunctions)(FindPage));
  