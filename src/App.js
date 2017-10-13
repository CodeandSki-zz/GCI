import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeComponent from './Employee';
import logo from './logo.svg';
import './App.css';


const initialState = {
  count: 1,
  name: ['Andrew Hove', 'John Boyega'],
};

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADDUSER":
      return {
        ...state,
        count: state.count + 1
      }
    case "REMOVEUSER":
      return {
        count: state.count -1
      }
    default: 
      return state;

  }
}


const store  = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

console.log(store, 'This is the store');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <EmployeeComponent></EmployeeComponent>
        </Provider>
      </div>
    );
  }
}




export default App;
