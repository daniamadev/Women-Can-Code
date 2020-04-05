import React from 'react';
import { render } from 'react-dom';
import MostraNumero from './MostraNumero';
import AdicionaNumero from './AdicionaNumero'
import RemoveNumero from './RemoveNumero'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return {
        count: state.count + 1
      };
    case 'DECREMENTAR':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <div>
      <MostraNumero />
      <AdicionaNumero />
      <RemoveNumero />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));

