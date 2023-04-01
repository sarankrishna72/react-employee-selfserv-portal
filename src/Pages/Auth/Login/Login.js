import React, { useEffect, useState } from 'react';
import './Login.scss';
import Select from '../../../Components/Form/Select';
import Input from '../../../Components/Form/Input';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Form/Button';
import { getCookieData } from '../../../Core/UtilScript/UtilScript';

const Login = () => {
    const [formData, setFormData] = useState({
        role: '',
        email: '',
        password: '',
        rememberMe: false
    });

    const loginInputs = [
        {
            id: "role",
            name: 'role',
            label: 'Login as',
            placeholder: 'Select Role',
            options: [["hr_admin", "Hr Admin"], ["employee", "Employee"]],
            required: true,
            type: 'dropdown',
            autoComplete: 'off',
            errorMessages: {
                valueMissing: 'Please select any role',
            }
        },
        {
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
        },
        {
            id: 'password',
            name: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            type: 'password',
            required: true,
            autoComplete: 'off',
            errorMessages: {
                valueMissing: 'Please enter your password',
            }
        }
    
    ]

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:  event.target.type === 'checkbox'  ? event.target.checked : event.target.value,
        });
    }

    const setRememberCookie = () => {
        document.cookie = `_email=${formData.email};path=${window.location.origin}/cookies`;
        document.cookie = `_password=${formData.password};path=${window.location.origin}/cookies`;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        let cookies = {...getCookieData(['email', 'password'])  }
        cookies = {...cookies,  ...(cookies ? {remeberme: true} : {})}
        setFormData(cookies)
      }, []);
    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                {
                    loginInputs.map((inputItem, index) => 
                        { 
                            return (<div className='mb-[1em]'>
                                {
                                    (() => {
                                        switch (inputItem.type) {
                                        case 'dropdown':
                                            return <Select {...inputItem}  key={index} value={formData[inputItem.name]} onChange={handleChange}/>;
                                        default:
                                            return <Input {...inputItem}  key={index} value={formData[inputItem.name]} onChange={handleChange}/>;
                                        }
                                    })()
                                }
                            </div>)
                            
                        }
                    )
                }
                <div className='form-group-ele mb-[2em]'>
                    <Button fullWidth={true} size={'small'} btnType={'primary'}>
                        <span>Login</span>
                    </Button>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full sm:w-1/2'>
                        <div className="sm:mb-[2em] mb-[1em]">
                            <Input id={'rememberMe'} type="checkbox" name={'rememberMe'} label="Remember me"  onChange={handleChange} value={formData.rememberMe || false}/>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 flex sm:justify-end'>
                        <Link to="/Auth/ForgotPassword">
                            <div className='cursor-pointer flex text-primary'>
                                <i className='icns icon-forgot-password w-[20px] h-[20px] mr-2'></i>
                                Forget Password?
                            </div>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;
