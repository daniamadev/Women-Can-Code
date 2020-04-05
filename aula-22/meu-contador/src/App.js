import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';
import Contador2 from './Contador2'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return{
        count: state.count+1
      };
    case 'DECREMENT':
      return {
        count: state.count-1
      };
    default:
      return state;
  }
}


const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
  <Counter/>
  <Contador2/>
  </Provider>
);
export default App;
