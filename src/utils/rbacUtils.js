export const hasPermission = (rolePermissions, requiredPermission) => {
    return rolePermissions.includes(requiredPermission);
  };
  
  export const isAuthorized = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
  };
  