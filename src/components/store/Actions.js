import {ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_TODO_INDEX, SET_TODO_INPUT} from './Constact.js'
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
export default {updateTodo, setTodoIndex, deleteTodo, addTodo,setTodoInput}