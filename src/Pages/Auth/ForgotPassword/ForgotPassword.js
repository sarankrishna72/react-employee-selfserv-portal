import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Input from '../../../Components/Form/Input';
import Button from '../../../Components/Form/Button';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const formInput = {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
    autoComplete: 'off',
    pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    errorMessages: {
        patternMismatch: 'Invalid email',
        valueMissing: 'This field is required',
        typeMismatch: 'Invalid email'
    }
  }

  const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]:  event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='mb-[1em]'>
          <Input {...formInput}   value={formData[formInput.name]} onChange={handleChange}/>
        </div>
        
        <div className='form-group-ele mb-[2em]'>
            <Button fullWidth={true} size={'small'} btnType={'primary'}>
                <span>Request</span>
            </Button>
        </div>
        <Link to={'/Auth/Login'}>
          <div className='flex items-center gap-2 cursor-pointer text-primary'>
            <i className='icns icon-back w-5 h-5'></i>
            Back to Login
          </div>
        </Link>
      </form>
    </>
  )
}

export default ForgotPassword