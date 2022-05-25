import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Post } from '../../../../../Context/Post';
export default function FormFinal() {
  
  const {setFormResult, formResult} = useContext(Post);
  const navigate = useNavigate();
  setTimeout(() => {
    setFormResult([])
    console.log(formResult)
    navigate('/')
  }, 3500);

  return (
    <form >
    <div className='send_gif'></div>
    </form>
  )
}
// navigate('/');