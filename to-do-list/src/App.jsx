import React, { useState } from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TaskBlock from './components/TaskBlock/TaskBlock';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
    console.log('clicked')
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  return (
    <div className='app'>
      <Header />
      <section className='toDoBlock'>
        <div className='control'>
          <Input type="text" placeholder="Enter Task for List" value={taskText} onChange={handleInputChange} />
          <Button label="Enter" onClick={handleAddTask} />
        </div>
        <ul>
          {tasks.map((task, index) => (
            <TaskBlock key={index} text={task} onClick={() => handleRemoveTask(index)} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
