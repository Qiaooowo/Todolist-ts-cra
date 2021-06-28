import React from 'react'
import {StateProps} from './Todo'

interface Iprops {
    filterList : StateProps[],
    fdo:() => void,
    fdid:() => void
}
const Filter = ({fdo,fdid,filterList}:Iprops) => {
    const fdidHandler = () =>{
        fdid();
    }
    const fdoHandler = () =>{
        fdo();
    }
    return(
       <div>
            <button onClick={fdoHandler}>已完成</button><button onClick={fdidHandler}>未完成</button>
        
        <ul>
            {filterList.map((item) =>(
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
       </div>
    )
}

export default Filter;