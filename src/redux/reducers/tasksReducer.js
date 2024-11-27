// src/redux/reducers/tasksReducer.js
import { SET_TASKS } from '../actions/taskActions';

const initialState = {
  tasks: [], // Initial state is an empty array of tasks
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default tasksReducer;
