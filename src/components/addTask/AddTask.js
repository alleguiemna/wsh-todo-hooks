import React, { useState } from 'react'

const AddTask = ({handleAdd}) => {
          const [text, setText] = useState("")
          const handleSubmit=(e)=>{
                    setText(e.target.value)
          }
          return (
                    <div className="add">
                          <input type="text" onChange={handleSubmit} value={text}/>  
                          <button onClick={() =>{handleAdd(text);setText("")}}>Add</button>  
                    </div>
          )
}

export default AddTask
