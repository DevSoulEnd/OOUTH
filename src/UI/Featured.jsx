import React from 'react'
import '../components/featuredInfo/featuredInfo.css';

export default function Featured({title, message,id}) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{message}</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
      <span className="featuredSub">{id}</span>
      </div>
    </div>
  )
}
