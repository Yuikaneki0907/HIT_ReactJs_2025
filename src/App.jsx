import React, { useReducer, useRef, useState } from "react";
import { Routes, Route, Link, useRoutes, useNavigate } from "react-router-dom";

//1. init state
const initstate = {
  todoInput: "",
  todos: [],
  editIndex: null,
};

//2. actions
const SET_TODO_INPUT = "set_todo_input";
const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const SET_TODO_INDEX = "set_todo_index";
const UPDATE_TODO = "update_todo";
const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};
const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
const setTodoIndex = (payload) => {
  return {
    type: SET_TODO_INDEX,
    payload,
  };
};
const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

//3. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodo,
      };
    case SET_TODO_INDEX:
      return {
        ...state,
        editIndex: action.payload,
      };
    case UPDATE_TODO:
      const updateTodos = [...state.todos];
      updateTodos[action.payload.index] = action.payload.value;
      return {
        ...state,
        todos: updateTodos,
      };
  }
};
const App = () => {
  //4. dispatch
  const [state, dispatch] = useReducer(reducer, initstate);
  const { todoInput, todos, editIndex } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addTodo(todoInput)), dispatch(setTodoInput(""));
    inputRef.current.focus();
  };
  const handleEdit = (index) => {
    dispatch(setTodoInput(todos[index]));
    dispatch(setTodoIndex(index));
    inputRef.current.focus();
  };
  const handleUpdate = () => {
    dispatch(updateTodo({ index: editIndex, value: todoInput }));
    dispatch(setTodoIndex(null));
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Todo</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter todo..."
        value={todoInput}
        onChange={(e) => {
          dispatch(setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <button disabled={editIndex == null} onClick={handleUpdate}>
        Update
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteTodo(index))}
            >
              &times;
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
