import React from 'react'
import TodoItem from './TodoItem';
import{ StateProps } from './Todo'
const styles ={
    marginTop:"15px"
}
//池子 可以放props传下来的
interface Iprops {
    todoList: StateProps[];
    changeTodo:(id : number) => void;
    deleteTodo:(id : number) => void;
    editTodo:(todoid: number,todo : StateProps) => void
}
//函数式组件
const TodoList = ({todoList,changeTodo,deleteTodo,editTodo} : Iprops) => {
    const todoListdom = todoList.map((item) => <TodoItem key = {item.id} todo={item} changeTodo={changeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>)
    return(
        <ul id="todolist" style={styles}> 
            {todoListdom}
        </ul>
    )
}
export default TodoList;