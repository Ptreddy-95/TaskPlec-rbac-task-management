// src/redux/actions/userActions.js
export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
  });
  
  export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
  });
  
  // Renaming 'updateUser' to 'editUser'
  export const editUser = (user) => ({
    type: 'UPDATE_USER', // Same action type
    payload: user,
  });
  