import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const defaultState = {
  tasks: []
}

export const addTask = (taskText) => ({
  type: "ADD_TASK",
  payload: taskText,
});

export const removeTask = (index) => ({
  type: "REMOVE_TASK",
  payload: index,
})
 
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {tasks: [...state.tasks, action.payload]};
    case "REMOVE_TASK":
      return {tasks: state.tasks.filter((_, index) => index !== action.payload)};
    default:
      return state;
  } 
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
