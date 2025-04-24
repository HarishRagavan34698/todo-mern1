import React, { useState } from 'react';

const TaskItem = ({ task, completeTask, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editedDescription.trim()) {
      editTask(task.id, editedDescription);
      setIsEditing(false);
    }
  };

  return (
    <div key={task.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={task.completed || false}
            onChange={() => completeTask(task.id)}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedDescription}
              onChange={handleEditChange}
              className="border border-gray-300 px-2 py-1 rounded-md"
            />
          ) : (
            <p className={`${task.completed ? 'line-through opacity-50' : ''}`}>
              {task.description}
            </p>
          )}
        </div>

        <div className="flex items-center ml-4 space-x-2">
          {isEditing ? (
            <button onClick={handleEditSubmit} className="text-blue-500 hover:underline">
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:underline">
              Edit
            </button>
          )}
          <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
