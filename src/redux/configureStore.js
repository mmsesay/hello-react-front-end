import { createStore, combineReducers } from 'redux';
import { greetReducer } from './greet';

const reducers = combineReducers({
  greetReducer,
});

const store = createStore(
  reducers,
);

export default store;
