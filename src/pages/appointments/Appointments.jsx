import React from 'react'
import './appointments.css'
import '../../UI/Cards'
import Cards from '../../UI/Cards'
import Data from '../../Data'

export default function Appointments() {
  return (
    <div className="appointments">
        <div className="appointments-wrapper">
            {
              Data.map((item)=>{
                return <Cards key={item.id} Data = {item}/>
              })
            }
        </div>
    </div>
  )
}
