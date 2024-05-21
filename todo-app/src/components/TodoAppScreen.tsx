import React, { useState } from 'react'

export default function TodoAppScreen() {
  const [text , setText] = useState('')
  const [textList , setTextList] = useState<any>([])

      // ADD TODO BUTTON 

  const addTodo = ()=>{
    console.log(textList);
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
      let newText = prompt('Edit your task here')
      textList.splice(i , 1 , newText)
      setTextList([...textList])
    }


  return (
    <div>
      <input className='me-3' type="text" value={text} placeholder='Enter your tasks here...' onChange={(e)=>{
        setText(e.target.value)
      }} />
      <button className='me-3' onClick={addTodo}>Add Todo</button>
      <button onClick={deleteAll}>Delete All</button>
      {textList.map((x:any , i:number)=>{
        return <p className='mt-3' key={i}>{x} <button onClick={()=>{
          deleteTodo(i)
        }}>Delete</button> <button onClick={()=>{
          editTodo(i)
        }}>Edit</button> </p>
          
      })}
    </div>
  )
}
