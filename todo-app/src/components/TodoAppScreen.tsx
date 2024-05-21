import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


export default function TodoAppScreen() {
  const [text , setText] = useState('')
  const [textList , setTextList] = useState<any>([])

      // ADD TODO BUTTON 

  const addTodo = ()=>{
    textList.push(text)
    setTextList([...textList])
    setText('')
  }

    // DELETE ALL TODO BUTTON 

  const deleteAll = ()=>{
    setTextList([])
  }

    // DELETE TODO BUTTON

    const deleteTodo = (i:number)=>{
      textList.splice(i , 1)
      setTextList([...textList])
    }

    // EDIT TODO BUTTON

    const editTodo = (i:number)=>{
      let newText = prompt('Edit your task here' , textList[i])
      textList.splice(i , 1 , newText)
      setTextList([...textList])
    }


    // RENDERING THE APP

  return (
    <div id='box'>
      <input className='me-3' type="text" value={text} placeholder='Enter your tasks here...' onChange={(e)=>{
        setText(e.target.value)
      }} />
      <button className='button' onClick={addTodo}>Add</button>
      <button className='button' onClick={deleteAll}>Delete All</button>
      {textList.map((x:any , i:number)=>{
        return <p id='list' key={i}>{x} <button className='button' onClick={()=>{
          deleteTodo(i)
        }}><FontAwesomeIcon icon={faTrashCan} /></button> <button className='button' onClick={()=>{
          editTodo(i)
        }}><FontAwesomeIcon icon={faPen} /></button> </p>
          
      })}
    </div>
  )
}
