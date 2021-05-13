import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from '../TodoContext';

const TodoListBlock = styled.div`
    font-size:30px;
    flex:1;
    padding: 20px 32px;
    padding-bottom:48px;
    overflow-y: auto;
    // border:1px solid ;

`;

function TodoList() {
  const state = useTodoState();
  console.log(state)
  return(
    <TodoListBlock>
       {state.map(item=><TodoItem key={item.id} id={item.id} text={item.text} done={item.done}/>)}
        {/* <TodoItem text={'aa'} done={true}/>
        <TodoItem text={'bb'}/>
        <TodoItem text={'cc'}/>
        <TodoItem text={'dd'}/> */}
    </TodoListBlock>
  );
}

export default TodoList;