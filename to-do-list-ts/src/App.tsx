import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, changeTask, initializeTasks, removeTask } from './main';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TaskBlock from './components/TaskBlock/TaskBlock';
import './App.css';   

import { RootState, InfoData } from './main';

function App() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks);

  const [taskText, setTaskText] = useState<string>('');

  useEffect(() => {
    getTasks().then((response) => {dispatch(initializeTasks(response))});
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      const task: InfoData = {
        completed: false,
        id: Date.now(),
        title: taskText,
        userId: Date.now()
      }
      dispatch(addTask(task));
      setTaskText('');
    }
  };

  const handleRemoveTask = (index: number) => {
    dispatch(removeTask(index));
  };

  const handleChangeTask = (index: number) => {
    dispatch(changeTask(index));
  };
  
  const tasksApi: Promise<InfoData[]> = fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then((json) => {return json});

  const getTasks = async () => {
    const tasksResponse = await tasksApi;
    return tasksResponse;
  }

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
            <TaskBlock key={index} text={task.title} onChange={() => handleChangeTask(index)} onClick={() => handleRemoveTask(index)} completed={task.completed} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
