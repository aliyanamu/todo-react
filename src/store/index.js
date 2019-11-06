import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import todoReducer from './reducers/todo';

const combinedReducers = combineReducers({
  authReducer, todoReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
