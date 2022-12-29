import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserImg from "../asset/user.png"

function UserDetails() {
    const location = useLocation();
    const {singleUser} = location.state;
  return (
    <div style={{width:"450px", boxShadow:"0px 3px 5px rgba(0,0,0,.25)"}} className="text-center p-3 m-3">
        <img src={UserImg} alt="userImage" style={{width:"50%"}} />
        <h2>{singleUser.username}</h2>
        <p>{singleUser.email}</p>
        <div className='d-flex justify-content-around align-items-center my-3'>
            <Link to="/edit-user" state={{editUser:singleUser}}><button className='btn btn-primary'>Edit Contact</button></Link>
            <Link to="/"><button className='btn btn-success'>All Contacts</button></Link>
        </div>
    </div>
  )
}

export default UserDetails