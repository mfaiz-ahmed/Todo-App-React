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

  return (
    <div>
      <input className='me-3' type="text" value={text} placeholder='Enter your tasks here...' onChange={(e)=>{
        setText(e.target.value)
      }} />
      <button className='me-3' onClick={addTodo}>Add Todo</button>
      <button onClick={deleteAll}>Delete All</button>
      {textList.map((x:any , i:number)=>{
        return <p className='mt-3' key={i}>{x}</p>
          
      })}
    </div>
  )
}
