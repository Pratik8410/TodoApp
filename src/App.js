import React from 'react'
import { Provider } from 'react-redux'
import store from "./ReduxStore/Store"
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className='text-center my-4'>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>

    </Provider>
  )
}

export default App

