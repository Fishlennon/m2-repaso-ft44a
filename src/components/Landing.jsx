import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../redux/actions';
// Validación de email:
const emailRegExp = /\S+@\S+\.\S+/;

export default function Landing (props) {

  const [input, setInput]= React.useState({
    name: '',
    email: ''
  })
  const [errors, setErrors]= React.useState({
    name: 'Ingrese su nombre',
    email: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    setInput({
      ...input,
      [name]:value
    })

    if(name === 'name'){
      if (value.length<4 || value.length > 25) {
        setErrors({
          ...errors,
          name: "Nombre debe ser entre 4 y 25 caracteres"
        })
      } else {
        setErrors({
          ...errors,
          name:''
        })
      }
    }
    if(name=== 'email'){
      if(!emailRegExp.test(value)){
        setErrors({
          ...errors,
          email:' Email invalido'
        })
        
    }

  }
}

const dispatch = useDispatch()

  const handleSubmit = (event)=>{
    event.preventDefault() ;
    dispatch(setUser(input))
    
}


  return (
    <div>
      <h2>Bienvenidos</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="emaile">Nombre</label>
          <input type="text" id="emaile" name="name" placeholder="Correo electronico" value={input.name} onChange={handleChange} />
                

          <br />

          <label htmlFor="pass">Email</label>
          <input type="email" id="pass" name="email" placeholder="email" value={input.email} onChange={handleChange}/>
                

          <br />

          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
