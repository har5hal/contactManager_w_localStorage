import React, { useState, useEffect } from 'react';
import AddUser from '../components/AddUser';
import ContactsList from '../components/ContactsList';
import { v4 as uuid } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import EditUser from '../components/EditUser';

function Home() {
  const LOCAL_STORAGE_KEY = 'user';

  // const userDetails = [
  //   {
  //       id:'1',
  //       username:"Harshal",
  //       email:"harshal@email.in"
  //   },
  //   {
  //       id:'2',
  //       username:"Ashish",
  //       email:"ashish@email.in"
  //   },
  //   {
  //       id:'3',
  //       username:"Soni",
  //       email:"soni@email.in"
  //   }
  // ]

  const [contacts, setContact] = useState([])

  const addContact = (newContact) => {
    // console.log(newContact);

    const contact = {...newContact, id:uuid()}

    setContact(preVal => {
      return [...preVal, contact]
    })
  }

  const deleteHandler = (deleteID) => {
    const newContactDel = contacts.filter(contact => contact.id  !== deleteID)
    setContact(newContactDel)
  }

  const editContactHandler = (editedContact) => {
    // const newEditedContacts = contacts.map(contact => {
    //   if(editedContact.id === contact.id) {
    //     return {...contact, username:editedContact.username, email:editedContact.email};
    //   } else {
    //     return contact;
    //   }
    // })

    const {username, email} = editedContact;

    //shorthand
    const newEditedContacts = contacts.map(contact => (editedContact.id === contact.id)?{...contact, username:username, email:email}:contact)

    setContact(newEditedContacts);

  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(localData)
    if(localData) setContact(localData)

    return ()  => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className="main d-flex justify-content-center">
      <Routes>
        <Route path='/' element={<ContactsList contacts={contacts} deleteHandler={deleteHandler} />} />
        <Route path='/add-user' element={<AddUser addContact={addContact} />} />
        <Route path='/edit-user' element={<EditUser editContactHandler={editContactHandler} />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </div>
  )

}

export default Home;
