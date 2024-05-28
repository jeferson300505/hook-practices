import React from 'react'
import { useState } from 'react'

export const MyFirstComponent = () => {

  const [counter, setCouter]= useState(0);

  return (
    <div >
      <h3>el numero de {counter}</h3>
      <button className="button" type='submit'onClick={()=>{ setCouter(counter +1)}}>Click contador</button>
      
    </div>
  )
}
