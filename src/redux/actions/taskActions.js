// src/redux/actions/taskActions.js
export const SET_TASKS = 'SET_TASKS';

// Action creator to set tasks
export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});
