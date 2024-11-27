export const addRole = (role) => ({
    type: 'ADD_ROLE',
    payload: role,
  });
  
  export const deleteRole = (roleId) => ({
    type: 'DELETE_ROLE',
    payload: roleId,
  });
  
  
  export const editRole = (role) => ({
    type: 'UPDATE_ROLE',  
    payload: role,
  });
  