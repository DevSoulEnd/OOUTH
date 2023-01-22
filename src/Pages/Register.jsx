import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import Input from '../Components/UI/Input'

export default function Login() {
  return (
      <section className='form'>
              <Input/>
              <Link to ='/login'> Already have an account?, login!</Link>
      </section>
  )
}
