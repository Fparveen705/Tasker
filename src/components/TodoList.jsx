 import React from 'react'
export default function TodoList(props) {
    const {todos} = props
 
    return (
     <ul className='main'>
         {todos.map((todo, todoIndex) => {
              return(
                <Todocard {...props}key ={todoIndex} index ={todoIndex}>
                <p>{todo}</p>
                </Todocard>
              )
          })}
     </ul>
   )
 }
 