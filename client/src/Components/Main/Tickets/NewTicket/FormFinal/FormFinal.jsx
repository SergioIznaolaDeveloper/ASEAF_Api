import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Post } from '../../../../../Context/Post';
import { LoginContext } from '../../../../../Context/Login';

export default function FormFinal() {

  const { isAuthenticated } = useContext(LoginContext);
  const { setFormResult, formResult } = useContext(Post);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setFormResult([])
      console.log(formResult)
      return isAuthenticated ? navigate('/tickets') : navigate('/')
    }, 3500);
  }, []);


  return (
    <form >
      <div className='send_gif'></div>
    </form>
  )
}