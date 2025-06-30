import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [name,setName]=useState("")
  return (
    <div>
          <h1>{name}</h1>
        <Child setName={setName}/>
         
      
    </div>
  )
}

export default Parent