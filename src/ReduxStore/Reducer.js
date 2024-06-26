import { createReducer } from '@reduxjs/toolkit';
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './Action';

const initialState = [];

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_TODO, (state, action) => {
            state.push({ id: Date.now(), task: action.payload });
        })
        .addCase(DELETE_TODO, (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        })
        .addCase(EDIT_TODO, (state, action) => {
            const { id, updatedTask } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.task = updatedTask;
            }
        });
});

export default todoReducer;
