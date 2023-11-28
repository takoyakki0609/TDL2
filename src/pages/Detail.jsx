import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {

  const navigate = useNavigate()
  const todos = useSelector((state)=>state.todos)
  const params = useParams().id
  console.log(params)
  const onTodo = todos.filter((item)=>{
    return item.id === params
  })[0]
console.log(onTodo)

  return <Container>
    <h3>{onTodo.title}</h3>
    <p>{onTodo.contents}</p>
    <button onClick={()=>navigate('/')}>돌아가기</button>
  </Container>;
};

export default Detail;

const Container =styled.div`
  
`