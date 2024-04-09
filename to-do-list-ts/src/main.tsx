import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import { createRoot } from 'react-dom/client';

export type RootState = typeof defaultState;

const ADD_TASK: "ADD_TASK" = "ADD_TASK";
const REMOVE_TASK: "REMOVE_TASK" = "REMOVE_TASK";
const INITIALIZE_TASKS: "INITIALIZE_TASKS" = "INITIALIZE_TASKS";
const CHANGE_TASK: "CHANGE_TASK" = "CHANGE_TASK";

interface DefaultState {
  tasks: InfoData[]
}

export interface InfoData {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

const defaultState: DefaultState = {
  tasks: []
};

export const addTask = (taskText: InfoData) => ({
  type: ADD_TASK,
  payload: taskText,
});

export const removeTask = (index: number) => ({
  type: REMOVE_TASK,
  payload: index,
});

export const initializeTasks = (tasks: InfoData[]) => ({
  type: INITIALIZE_TASKS,
  payload: tasks,
});

export const changeTask = (index: number) => ({
  type: CHANGE_TASK,
  payload: index,
});

type Actions = ReturnType<typeof addTask> | ReturnType<typeof removeTask> | ReturnType<typeof initializeTasks> | ReturnType<typeof changeTask>;
 
const reducer = (state: RootState = defaultState, action: Actions): RootState  => {
  switch (action.type) {
    case ADD_TASK:
      state.tasks = [action.payload, ...state.tasks];

      return state;
    case REMOVE_TASK:
      state = {
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

      return state;
    case INITIALIZE_TASKS:
      state = {
        tasks: action.payload,
      };

      return state;
    case CHANGE_TASK: 
      state = {
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload) {
            task.completed = !task.completed
          }
          return task
        }),
      }

      return state;
    default:
      return state;
  } 
};

const store = createStore(reducer);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);