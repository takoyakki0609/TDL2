import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";

function TaskInput() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch()
  const handleTitleAdd = (e) => {
    setTitle(e.target.value);
  };
  const handleContentsAdd = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask ={
        id:shortid.generate(),
        title,
        contents,
        isDone : false
    }
    dispatch(addTodo(newTask))
   
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleAdd} />
      <input type="text" value={contents} onChange={handleContentsAdd} />
      <button type="submit">추가</button>
    </Container>
  );
}

export default TaskInput;

const Container = styled.form`
  display: flex;
`;
