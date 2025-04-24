import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import TaskPage from './components/TaskPage';

function App() {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: false },
    { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
  ]);

  const submitTask = (desc) => {
    const current_id = tasks.length + 1;
    const newTask = {
      id: current_id,
      description: desc,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (id, newDescription) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <header className="text-center text-3xl font-bold my-6">TODO-MERN</header>
      <Search search={search} setSearch={setSearch} submitTask={submitTask} />
      <TaskPage
        tasks={tasks}
        completeTask={completeTask}
        editTask={editTask}
        deleteTask={deleteTask} // ✅ Ensure it's passed here
      />
    </div>
  );
}

export default App;
