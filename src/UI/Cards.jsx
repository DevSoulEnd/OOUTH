import React from 'react'
import '../components/featuredInfo/featuredInfo.css'
import { Link } from 'react-router-dom';

export default function Cards({Data}) {
    const {id, patientId, dateCreated, name, preferredDate, preferredTime} = Data;
  return (
    <div className="featuredItem item">
        <p>Patient's Id: <span>{patientId}</span></p>
        <p>Registration Date: <span>{dateCreated}</span></p>
        <p>Patient's Name: <span>{name}</span></p>
        <p>Preferred date of appointment: <span>{preferredDate}</span></p>
        <p>Preferred time of appointment: <span>{preferredTime}</span></p>

        <div className="button">
          <Link to = {`/appointments/${id}`}>
          <button className="view"> View Appointment</button>
          </Link>
        </div>
    </div>
  )
}
