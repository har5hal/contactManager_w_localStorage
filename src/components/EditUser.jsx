import React, { useState } from 'react' 
import { Link, useLocation, useNavigate } from 'react-router-dom';

function EditUser({ editContactHandler }) {

    const location = useLocation();
    const {editUser} = location.state;

    const navigate = useNavigate();

      const formErr = {
        userErr:'',
        emailErr:''
      }
      const [userData, setUserData] = useState(editUser);
      const [formError, setFormError] = useState(formErr);
    
      const nameEditHandler = (e) => {
        const userValue = e.target.value;
        setUserData(preVal => {
          return {...preVal, username:userValue}
        })
      }
    
      const emailEditHandler = (e) => {
        const emailValue = e.target.value;
        setUserData(perVal => {
          return {...perVal, email:emailValue}
        })
      }
    
      const editSubmitHandler = (e) => {
        e.preventDefault();
        validate()
      }
    
      const validate = () => {
        const {username, email} = userData;
    
        const emptyValue = "Field should not be empty";
    
        if(username === "") {
          setFormError(preVal => {
            return {...preVal, userErr:emptyValue}
          })
        } else {
          setFormError(preVal => {
            return {...preVal, userErr:""}
          })
        }  
    
        if(email === "") {
          setFormError(preVal => {
            return {...preVal, emailErr:emptyValue}
          })
        } else {
          setFormError(preVal => {
            return {...preVal, emailErr:""}
          })
        }
    
        if(username!=="" && email!=="") {
          editContactHandler(userData);
          navigate("/"); 
          // navigate(`/user/${userData.id}`);

        }

    
      }
    
      return (
          <div style={{width:"450px", boxShadow:"0px 3px 5px rgba(0,0,0,.25)"}} className="p-3 m-3">
            <div className='d-flex justify-content-between align-items-center pb-2 mb-3' style={{borderBottom:"1px solid #cdcdcd"}}><h2>Edit Contact</h2><Link to="/"><button className='btn btn-primary'>Contacts</button></Link></div>
            <form onSubmit={editSubmitHandler}>
              <div className='my-4'>
                <input 
                type='text' 
                placeholder='Enter Name' 
                className='form-control'
                value={userData.username}
                onChange={nameEditHandler} />
                <span className='text-danger'>{formError.userErr}</span>
              </div>
              <div className='my-4'>
                <input 
                type='email' 
                placeholder='Enter Email' 
                className='form-control'
                value={userData.email}
                onChange={emailEditHandler} />
                <span className='text-danger'>{formError.emailErr}</span>
              </div>
              <input 
              type='submit' 
              value='Submit' 
              className='btn btn-primary' />
            </form>
          </div>
      );
}

export default EditUser