import {createStore, combineReducers} from 'redux';
import userReducer from './reducers';
const rootReducer = combineReducers({
  userReducer,
});
export const store = createStore(rootReducer);