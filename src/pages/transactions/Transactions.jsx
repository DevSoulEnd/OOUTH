import React from 'react'
import './transaction.css'
import PaymentData from '../../PaymentData'
import PaymentCards from '../../UI/PaymentCards'
import { Link } from 'react-router-dom'

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="payment">
        <Link to = "/transform">
        <button className="payment-btn"> Make Payment </button>
        </Link>
      </div>
      <div className="transaction-wrapper">
          {
            PaymentData.map((item)=>{
              return <PaymentCards key={item.id} Data = {item}/>
            })
          }
      </div>
    </div>
  )
}
