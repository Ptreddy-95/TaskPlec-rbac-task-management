import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, deleteUser } from "../redux/actions/userActions";
import './UserManagement.css'; // Import User Management styles


const UserManagement = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editMode, setEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("All fields are required!");
      return;
    }
    dispatch(addUser({ ...newUser, id: Date.now(), status: "Active" }));
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleEditUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("All fields are required!");
      return;
    }
    dispatch(editUser({ ...newUser, id: currentUserId }));
    setEditMode(false);
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleEditClick = (user) => {
    setEditMode(true);
    setNewUser({ name: user.name, email: user.email, role: user.role });
    setCurrentUserId(user.id);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        {editMode ? (
          <button onClick={handleEditUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
