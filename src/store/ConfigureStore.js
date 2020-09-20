import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'


// applyMiddleware supercharges createStore with middleware:
const store = createStore(reducers, applyMiddleware(thunk))

const ConfigureStore = () => {
  return store;
};

export default ConfigureStore;
