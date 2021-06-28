import React ,{ useState } from 'react'
import { StateProps } from './Todo'
interface Iprops {
    addTodo:(todo : StateProps) => void;
    count:number;
}
//函数式组件
//解构addTodo
const TodoInput = ({addTodo,count} : Iprops) => {
    const [ text , setText ] = useState('');
    //指定e的类型
    const changeTextHandler = (e : React.ChangeEvent) => {
       
        setText((e.target as HTMLInputElement).value);
        
    }
    //处理事件何时需要bind？
    const addTodoHandler = () => {
        //判断输入
        if(text.trim() === ''){
            return;
        }
        //传入一个对象
        addTodo({
            id: new Date().getTime(),
            text:  text,
            isFinished: false
        })
        //清空输入框
        setText('');
    }
    return(
        <div id="todoinput">
        <input type="text" placeholder="输入待办" onChange = {changeTextHandler} value = {text}/>
        <button onClick={addTodoHandler}>添加 #{count + 1}</button>
        </div>
    )
}
export default TodoInput;