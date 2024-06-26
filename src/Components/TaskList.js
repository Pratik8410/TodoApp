import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const todos = useSelector((state) => state.todos)
    return (

        <div className="list-group_horizontal d-flex justify-content-between align-items-center flex-wrap p-2 g-5">
            {todos?.map((todo) => (

                <TaskItem key={todo.id} todo={todo} />

            ))}

        </div>


    )
}

export default TaskList
