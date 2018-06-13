import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from 'redux/reducers';
import promise from 'redux-promise-middleware';

const middlewares = [promise(), thunk];
if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger());
export default () => createStore(reducer, {}, applyMiddleware(...middlewares));
