import React, { useState } from 'react'
import './Form.scss';
const Input = (props) => {
  const { onChange, id, label, value, type, groups, checked, errorMessages,classes = '', isShowLabel = true, ...inputProps } = props;
    const [showPassword, setShowPassword] = useState(false)
    const [validationError, setValidationError] = useState('')


    const showPasswordEvent = () => {
      setShowPassword(!showPassword)
    }

    const changeInput = (event) => {
      onChange(event)
      setValidationError('')
      checkValidation(event)
    }

    const checkValidation = (event) => {
      if (!event.target.validity.valid) {
        for (const key in event.target.validity) {
          if (event.target.validity[key]) {
            setValidationError(errorMessages ? (errorMessages[key] || event.target.validationMessage || 'Invalid entry please provide correct input') : 'This field is required') 
          }
        }
      }
    }
  return (
    <>
      <div className='w-full'>
        {(() => {
            switch (props.type) {
              case 'password':
                return(
                  <div className='form-group-ele '>
                    {
                      isShowLabel && 
                      <label className='inline-block mb-[0.2em]'>{label}</label>
                    }
                    <div className=' flex items-center relative'>
                        <input type={showPassword ? "text" : "password"} className={`${classes || ''} custom-input`}  value={value || ''} id={id}  data-input-error={validationError ? true.toString() : false.toString()}  {...inputProps} onChange={changeInput} onBlur={checkValidation}/>
                        <div title="Show password" className="form-group-with-icon cursor-pointer">
                            <span className='animate__animated animate__fadeIn' onClick={showPasswordEvent}>
                                <i className={`${showPassword ? "icon-password-hide" : 'icon-password-show'} icns w-5 h-5 ps-icon `}></i>
                            </span>
                        </div>
                    </div>
                  </div>
                )
              case 'checkbox':
                return (
                
                  <div className="customized-checkbox checkbox-default relative">
                    <input type="checkbox"  id={id} checked={checked}  {...inputProps} onChange={changeInput}/> 
                    <label htmlFor={id}>{label}</label>
                  </div> 
                )
              case 'radio': 
                return(
                  <>
                    <div className='flex gap-2'>
                      {
                        groups.length > 0 &&
                        groups.map(radio => {
                          return(
                            <div key={radio.id} className="customized-radio radio-default relative">
                              <input type="radio" value={radio.id}  id={radio.id} checked={value === radio.id}  {...inputProps} onChange={changeInput}/> 
                              <label htmlFor={radio.id}>{radio.name}</label>
                            </div> 
                          )
                        })
                      }
                    </div>
                  </>
                )
              case 'textarea':
                return(
                  <>
                    <div className='form-group-ele'>
                      {
                        isShowLabel && 
                        <label className='inline-block mb-[0.2em]'>{label}</label>
                      }
                      <div>
                        <textarea className={`${classes} custom-input`} id={id} value={value || ''} data-input-error={validationError ? true.toString() : false.toString()}  {...inputProps} onChange={changeInput} onBlur={checkValidation}></textarea>            
                      </div>
                    </div>
                  </>
                )
              default:
                return(
                  <div className='form-group-ele'>
                     {
                      isShowLabel && 
                      <label className='inline-block mb-[0.2em]'>{label}</label>
                    }
                    <div>
                      <input type={type} className={`${classes} custom-input`} id={id} value={value || ''} data-input-error={validationError ? true.toString() : false.toString()}  {...inputProps} onChange={changeInput} onBlur={checkValidation}/>
                    </div>
                  </div>
                );
            }
        })()}
        {
          validationError && 
          <span className='help-block'>{validationError}</span>
        }
      </div>
      
     
    </>
  )
}

export default Input