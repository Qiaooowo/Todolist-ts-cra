import React from 'react'
import { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import Filter from './Filter';

export interface StateProps{
    id : number;
    text : string;
    isFinished : boolean;
}
//函数式组件
const Todo = () => {

    //hook
    const [todoList, setTodolist] = useState<StateProps[]>([])
    const [filterList,setfilterList] = useState<StateProps[]>([])
    console.log('组件更新执行')
    //状态提升至父组件 组件控制自身state 使用hook声明state 与setState方法 相当于所有的setState方法在父组件

    //修改状态
    const changeTodo = (id :number) => {
        const newTodoList = todoList.map(item =>{
            if(item.id === id){
                return Object.assign({}, item,{
                    isFinished: !item.isFinished
                    })
            }
            return item;
        })
        setTodolist(newTodoList);
    }
    //删除
    const deleteTodo = (id :number) => {
        const  newTodoList= todoList.filter(item =>{
            return item.id !== id;
        })
        setTodolist(newTodoList);
    }
    //添加
    const addTodo = (todo : StateProps) =>{
        setTodolist([...todoList,todo]);
    }
    //编辑
    const editTodo = (todoid:number,todo : StateProps) =>{
        const  newTodoList= todoList.map(item =>{
            if(item.id === todoid){
                return todo;
            }
            return item;
        })
        setTodolist(newTodoList);
    }
    
    
    //筛选filter
        const fdo = () =>{
            const  newTodoList= todoList.filter(item =>{
                return item.isFinished === true;
            })
            setfilterList(newTodoList);
        }
        const fdid = () =>{
            const  newTodoList= todoList.filter(item =>{
                return item.isFinished === false;
            })
            setfilterList(newTodoList);
        
    }
    
    

    return(
        <div id="todo">
            <TodoInput addTodo={addTodo} count={todoList.length}/>
            <TodoList todoList={todoList} changeTodo={changeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
            {/**prop传出函数 */}

            
            <Filter filterList={filterList} fdo={fdo} fdid={fdid}/>
        </div>
    )
}
export default Todo;