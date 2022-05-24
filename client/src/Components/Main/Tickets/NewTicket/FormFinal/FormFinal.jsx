import React, {useContext, useState} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';
import axios from 'axios';
export default function FormFinal() {
  const { handleSubmit, reset} = useForm();
  const {formResult} = useContext(Post);
  const [setResponse] = useState();
  let formulario = {}
  
  if (formResult.length === 7) {
    formulario = {...formResult[0], ...formResult[1], ...formResult[2], ...formResult[3], ...formResult[4], ...formResult[5], ...formResult[6]}
  } else {
    formulario = {...formResult[0], ...formResult[1], ...formResult[2], ...formResult[3], ...formResult[4], ...formResult[5], ...formResult[6], ...formResult[7]}
  }

  const onSubmitCreate = () => {
    console.log(formulario)
    fetchCreate(formulario)
    reset();
  }
  const fetchCreate = async (formulario) =>{
    try{
        const response = await axios.post('http://localhost:3001/api/create', {formulario});
        setResponse(await response.data);
        console.log(response.data)
        return response.data;
    }
    catch(error){
      setResponse(await error);
    }
}

  return (
    <form onSubmit={handleSubmit(onSubmitCreate)}>
    <button className="login__button" type='submit'>SIGUIENTE</button>
    </form>

  )

}
