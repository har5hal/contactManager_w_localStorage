import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactsList({ contacts, deleteHandler }) {

  return (
    <div style={{width:"450px", boxShadow:"0px 3px 5px rgba(0,0,0,.25)"}} className="p-3 m-3">
        <div className='d-flex justify-content-between align-items-center pb-3 mb-3' style={{borderBottom:"1px solid #cdcdcd"}}><h2>Contact List</h2><Link to="/add-user"><button className='btn btn-primary'>Add Contact</button></Link></div>
        
        {contacts.length?
          <ContactCard contacts={contacts} deleteHandler={deleteHandler} />
          :
          <h5 className='mt-2'>No Contact Found</h5>}
    </div>
  )
}

export default ContactsList