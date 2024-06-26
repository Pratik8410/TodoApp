import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../ReduxStore/Action';

const TaskInput = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTodo(task))
            setTask('');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className="input-group">
                    <input type="text"
                        className='form-control'
                        placeholder='Add a new task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)} />
                    <button className='btn btn-primary ms-2' type='submit'>Add</button>
                </div>
            </form>


        </>
    )
}

export default TaskInput
