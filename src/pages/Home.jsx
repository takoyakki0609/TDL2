import React from "react";
import TaskInput from "../redux/components/TaskInput";
import Header from "../redux/components/Header";
import TodoList from "../redux/components/TodoList";

const Home = () => {
  return <>
  <Header/>
  <TaskInput/>
  <TodoList isActive ={true}/>
  <TodoList isActive ={false}/>
  </>;
};

export default Home;
