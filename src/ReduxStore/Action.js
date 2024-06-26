export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: task,
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
})

export const editTodo = (id, updatedTask) => ({
    type: EDIT_TODO,
    payload: { id, updatedTask },
})