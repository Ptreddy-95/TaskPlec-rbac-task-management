import React, { useState } from 'react';
import './TaskManagement.css'; // Importing the Task Management styles

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description of Task 3', status: 'Completed' },
  ]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Pending' });
  const [editingTask, setEditingTask] = useState(null);

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ title: '', description: '', status: 'Pending' });
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Handle editing a task
  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map(task => (task.id === editingTask.id ? editingTask : task)));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="task-management-container">
      <h3>Task Management</h3>
      
      {/* Task Form */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h4>Task List</h4>
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            {editingTask && editingTask.id === task.id ? (
              <div className="edit-task-form">
                <input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                />
                <textarea
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                />
                <select
                  value={editingTask.status}
                  onChange={(e) => setEditingTask({ ...editingTask, status: e.target.value })}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className="task-details">
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;
