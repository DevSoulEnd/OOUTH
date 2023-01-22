import React from 'react'
import './payment.css'
import Transform from '../../components/form/Transform'

export default function Payment() {
  return (
    <div className='payment-page'>
      <Transform
        title = "Make Payment"
        name = "Full Name"
        patientId= "Patient's Id"
        type= "Type of Payment"
      />
    </div>
  )
}
