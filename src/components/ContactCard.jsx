import React from 'react'
import { BiTrash } from "react-icons/bi"
import { Link } from 'react-router-dom'

function ContactCard({ contacts, deleteHandler }) {
  return contacts.map(contact => {
    return (
    <div className='card d-flex flex-row justify-content-between align-items-center p-2 mb-3' key={contact.id}>
      <div className='card-body'>
        <Link to={{pathname:`/user/${contact.id}`}} state={{singleUser:contact}} style={{textDecoration:"none"}}><h4 className='card-title'>{contact.username}</h4></Link>
        <p>{contact.email}</p>
      </div>
      <div className='actions'>
        <button type='button' className='btn btn-danger' onClick={() => deleteHandler(contact.id)}><BiTrash size={22} /></button>
      </div>
    </div>
    )
  }
  )
}

export default ContactCard