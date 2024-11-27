const initialState = [
    { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
    { id: 2, name: 'Manager', permissions: ['read', 'write'] },
    { id: 3, name: 'Employee', permissions: ['read'] },
  ];
  
  const roleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ROLE':
        return [...state, action.payload];
      case 'UPDATE_ROLE':
        return state.map((role) =>
          role.id === action.payload.id ? action.payload : role
        );
      case 'DELETE_ROLE':
        return state.filter((role) => role.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default roleReducer;
  