import React from 'react'
import './form.css'
import { Link } from 'react-router-dom'

export default function Transform({title, name, patientId, type}) {
  return (
    <div className='form'><div className="userUpdate">
    <span className="userUpdateTitle">{title}</span>
    <form className="userUpdateForm">
      <div className="userUpdateLeft">
        <div className="userUpdateItem">
          <label>{name}</label>
          <input
            type="text"
            placeholder="Omah lay"
            className="userUpdateInput"
          />
        </div>
        <div className="userUpdateItem">
          <label>{patientId}</label>
          <input
            type="text"
            className="userUpdateInput"
          />
        </div>
        <div className="userUpdateItem">
          <label>{type}</label>
          <input
            type="text"
            className="userUpdateInput"
          />
        </div>
      <div className="btn-container">
        <Link to = '/home'>
        <button className="cancelBtn"> Cancel </button>
        </Link>
        <button className="userUpdateButton">Book appointment</button>
      </div>
      </div>
    </form>
  </div></div>
  )
}
