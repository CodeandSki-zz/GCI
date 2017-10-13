import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, cloneElement } from 'react';
import EmployeeComponent from 'Employee';


function mapStateToProps(state, props) {
               console.log(state);
               // const
               
               return {
                             
              
               }
}
 
function mapDispatchToProps(dispatch) {
              
               return bindActionCreators(
               {
                              ...StarsActions,
               }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent);