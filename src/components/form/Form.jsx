import React from 'react'
import './form.css'
import { Link } from 'react-router-dom'

export default function Form({title, name, id, date, time, number}) {
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
          <label>{id}</label>
          <input
            type="text"
            className="userUpdateInput"
          />
        </div>
        <div className="userUpdateItem">
          <label>{date}</label>
          <input
            type="date"
            className="userUpdateInput"
          />
        </div>
        <div className="userUpdateItem">
          <label>{time}</label>
          <input
            type="time"
            className="userUpdateInput"
          />
        </div>
        <div className="userUpdateItem">
          <label>{number}</label>
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
