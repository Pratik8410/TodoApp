import React, { useState } from 'react'
import EditTask from './EditTask'
import { deleteTodo } from "../ReduxStore/Action"
import { useDispatch } from 'react-redux'

const TaskItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false)

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleClose = () => {
        setIsEditing(false)
    }
    return (
        <>
            <div className='list-group_item d-flex justify-content-between align-content-center p-5 gy-5 '>
                <span>{todo.task}</span>
                <div>
                    <button className='btn btn-warning btn-sm me-2' onClick={handleEdit}>Edit</button>
                    <button className='btn btn-warning btn-sm ' onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {isEditing && <EditTask todo={todo} onclose={handleClose} />}

        </>
    )
}

export default TaskItem
