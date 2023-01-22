import React from 'react'
import '../components/featuredInfo/featuredInfo.css'

export default function Cards({Data}) {
    const {patientId, dateCreated, doctorName, preferredDate, preferredTime} = Data;
  return (
    <div className="featuredItem item">
        <p>Patient's Id: <span>{patientId}</span></p>
        <p>Registration Date: <span>{dateCreated}</span></p>
        <p>Doctor's Name: <span>{doctorName}</span></p>
        <p>Preferred date of appointment: <span>{preferredDate}</span></p>
        <p>Preferred time of appointment: <span>{preferredTime}</span></p>
    </div>
  )
}
