const initialState = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Manager' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Employee' },
  ];
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [...state, action.payload];
      case 'UPDATE_USER':
        return state.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      case 'DELETE_USER':
        return state.filter((user) => user.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default userReducer;
  