import React from 'react'
import {connect} from 'react-redux';
import FilterItem from './FilterItem';
 const Filter = ({filtered}) => {
    return (
        <div>
          {filtered != null && (
        <FilterItem fill={filtered} />
         )}
        </div>
    )
}
const getPropsFromState = (state) => {
    return {
        filtered : state.filtered,
        user : state.user,
    }
  }
export default connect(getPropsFromState , null)(Filter);