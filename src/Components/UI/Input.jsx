import React, {useRef} from 'react'


export default function Input() {
    const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()

  }
  return (
    <>
         <form className="form-wrapper">
              <div className="form__group">
                <input 
                type="email" 
                placeholder='Email'  
                ref={emailRef}
                onSubmit={submitHandler}
                />
              </div>

              <div className="form__group">
                <input 
                type="text" 
                placeholder='Password'
                ref={passwordRef}
                onSubmit={submitHandler}
                />
              </div>
              <button className="submit" type='submit'>Submit</button>
            </form>
    </>
  )
}
