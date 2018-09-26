import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(rootReducer, composeWithDevTools(middleware));
