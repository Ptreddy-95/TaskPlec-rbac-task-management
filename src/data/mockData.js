export const mockUsers = [
    { id: 1, name: "Admin User", email: "admin@taskplex.com", role: "Admin", status: "Active" },
    { id: 2, name: "Manager User", email: "manager@taskplex.com", role: "Manager", status: "Active" },
    { id: 3, name: "Employee User", email: "employee@taskplex.com", role: "Employee", status: "Active" },
  ];
  
  export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Manage Users", "Manage Roles", "View Tasks"] },
    { id: 2, name: "Manager", permissions: ["Assign Tasks", "View Users"] },
    { id: 3, name: "Employee", permissions: ["View Tasks"] },
  ];
  