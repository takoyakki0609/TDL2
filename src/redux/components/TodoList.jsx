import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../modules/todos";
import { useNavigate } from "react-router-dom";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleClickCheck = (id) => {
    dispatch(switchTodo(id))
  }
  return (
    <div>
      {isActive ? "해야할 일" : "완료된 일"}
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.contents}</p>
              {isActive ? <button onClick={()=>handleClickCheck(item.id)}>완료</button> : <button onClick={()=>handleClickCheck(item.id)}>되돌리기</button>}
              <button onClick={() => handleClickDelete(item.id)}>삭제</button>
              <button onClick={()=>navigate(`/${item.id}`)}>상세보기</button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
