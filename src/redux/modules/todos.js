// import uuid from "react-uuid";

import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELET_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const switchTodo = (payload) => ({
  type: SWITCH_TODO,
  payload,
});

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    contents: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((item)=>item.id !== action.payload)

    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
