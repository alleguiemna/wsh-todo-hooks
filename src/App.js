
import './App.css';
import { useState } from 'react';
import TaskList from './components/taskList/TaskList';
import AddTask from './components/addTask/AddTask';

function App() {
  const taskList =[
    {
      id:Math.random(),
      task:"Learn HTML",
      isDone:true
    },
    {
      id:Math.random(),
      task:"Learn CSS",
      isDone:false
    },
    {
      id:Math.random(),
      task:"Learn Node.js",
      isDone:true
    }
  ]
  const [tasks, setTasks] = useState(taskList)
  const handleComplete = (idTask) => {
    setTasks(tasks.map(elt => elt.id === idTask ? {...elt,isDone:!elt.isDone} : elt))
  }
  const handleDelete =(idTask) => {
    setTasks(tasks.filter(elt => elt.id!==idTask))
  }
  const handleAdd = (newTask) =>{
    setTasks([...tasks,{id:Math.random(),task:newTask,isDone:false}])
  }
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <AddTask handleAdd={handleAdd}/>
      <TaskList tasks={tasks}
      handleComplete={handleComplete}
      handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
