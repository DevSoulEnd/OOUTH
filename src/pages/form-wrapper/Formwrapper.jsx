import React from 'react'
import Form from '../../components/form/Form'
import './formwrapper.css'

export default function Formwrapper() {
  return (
    <div className='form-wrapper'>
        <Form
            title = "Book an Appointment"
            name = "Full Name"
            id = "Patient id"
            date = "Preferred Date of Appointment"
            time = "Preferred Time of Appointment"
            number= 'Hospital IUC number'
        />
    </div>
  )
}
