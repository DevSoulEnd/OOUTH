import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import Input from '../Components/UI/Input'

export default function Login() {
  return (
      <section className='form'>
              <Input/>
              <Link to ='/register'> Don't have an account? Create an Account</Link>
      </section>
  )
}