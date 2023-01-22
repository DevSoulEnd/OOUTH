import React from 'react'
import './cards.css'


export default function PaymentCards({Data}) {

    const {patientId, paymentType, amount, paymentDate, refNum} = Data;

  return (
    <div>
        <div className="cards">
        <p>Patient's Id: <span>{patientId}</span></p>
        <p>Payment Date: <span>{paymentDate}</span></p>
        <p>Payment Type: <span>{paymentType}</span></p>
        <p>Amount: <span>{amount}</span></p>
        <p>Ref number: <span>{refNum}</span></p>
        </div>
    </div>
  )
}
