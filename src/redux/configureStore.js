import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk),
);