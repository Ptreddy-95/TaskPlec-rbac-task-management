import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRole, editRole, deleteRole } from "../redux/actions/roleActions";
import './RoleManagement.css'; // Import Role Management styles


const RoleManagement = () => {
  const roles = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [editMode, setEditMode] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);

  const handleAddRole = () => {
    if (!newRole.name || newRole.permissions.length === 0) {
      alert("Role name and permissions are required!");
      return;
    }
    dispatch(addRole({ ...newRole, id: Date.now() }));
    setNewRole({ name: "", permissions: [] });
  };

  const handleEditRole = () => {
    if (!newRole.name || newRole.permissions.length === 0) {
      alert("Role name and permissions are required!");
      return;
    }
    dispatch(editRole({ ...newRole, id: currentRoleId }));
    setEditMode(false);
    setNewRole({ name: "", permissions: [] });
  };

  const handleDeleteRole = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      dispatch(deleteRole(id));
    }
  };

  const handleEditClick = (role) => {
    setEditMode(true);
    setNewRole({ name: role.name, permissions: role.permissions });
    setCurrentRoleId(role.id);
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => {
      const permissions = prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission];
      return { ...prev, permissions };
    });
  };

  const availablePermissions = [
    "Manage Users",
    "Manage Roles",
    "Assign Tasks",
    "View Tasks",
    "View Users",
  ];

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <div>
          {availablePermissions.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
        {editMode ? (
          <button onClick={handleEditRole}>Update Role</button>
        ) : (
          <button onClick={handleAddRole}>Add Role</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEditClick(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
