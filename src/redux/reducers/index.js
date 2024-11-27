import { combineReducers } from 'redux';
import userReducer from './userReducer';
import roleReducer from './roleReducer';

const rootReducer = combineReducers({
  users: userReducer,
  roles: roleReducer,
});

export default rootReducer;
