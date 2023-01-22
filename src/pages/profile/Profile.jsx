import React from 'react'
import './profile.css'
import {FaUserAlt} from 'react-icons/fa'

export default function Profile() {
  return (
    <div className='profile'>
        <div className="profile-wrapper">
            <div className="profile-header">
                <FaUserAlt className='user'/>
                <h3 className='name'> Dr, Tiamiyu Rexxie</h3>
            </div>

            <div className="cards-wrapper">
                <div className="cardd card1">
                    <p> Staff's Id: <span> 35863537738x</span> </p> 
                </div>

                <div className="cardd card2">
                    <p> Position: General Surgeon </p> 
                </div>
            </div>
        </div>
    </div>
  )
}
