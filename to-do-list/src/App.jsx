  import React, { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { addTask, removeTask } from './main';
  import Header from './components/Header/Header';
  import Button from './components/Button/Button';
  import Input from './components/Input/Input';
  import TaskBlock from './components/TaskBlock/TaskBlock';
  import './App.css';

  function App() {
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);

    const [taskText, setTaskText] = useState('');

    const handleInputChange = (event) => {
      setTaskText(event.target.value);
    };

    const handleAddTask = () => {
      if (taskText.trim() !== '') {
        dispatch(addTask(taskText));
        setTaskText('');
      }
      console.log(tasks)
    };

    const handleRemoveTask = (index) => {
      dispatch(removeTask(index))
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
