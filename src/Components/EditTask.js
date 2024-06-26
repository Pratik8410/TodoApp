import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../ReduxStore/Action';

const EditTask = ({ todo, onclose }) => {
    const [updatedTask, setUpdatedTask] = useState(todo.task);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (updatedTask.trim()) {
            dispatch(editTodo(todo.id, updatedTask))
            onclose();
        }
    }
    return (
        <>
            <div className="modal show" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className='modal-title'>Edit Task</h5>
                            <button type='button' className='btn-close' onClick={onclose}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                className='form-control'
                                value={updatedTask}
                                onChange={(e) => setUpdatedTask(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type='button' className='btn btn-secondary' onClick={onclose}>
                                Close
                            </button>

                            <button type='button' className='btn btn-primary' onClick={handleSave}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditTask
