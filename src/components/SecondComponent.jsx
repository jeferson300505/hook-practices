import React, { useState } from 'react'

export const SecondComponent = () => {

  const [name, setName] = useState("Jeferson");
  const [isNameChanged, setNameChanged] = useState(false);

  const changeName = (e)=>{
    if(isNameChanged){
      setName("jeferson");
    }else{
      setName("juan camilo");
    }
    setNameChanged(!isNameChanged);
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <button className='button2' onClick={changeName}>Cambiar nombre</button>
    </div>
  )
}
