import React, { useState } from 'react'
import './Form.scss'

const Select = (props) => {
  const {options, placeholder, onChange, value, errorMessages, classes = '', isShowLabel = true, label ,...restProps} = props;
  const [validationError, setValidationError] = useState('')

  const onSelectionChange = (event) => {
    onChange(event);
    setValidationError('')
  };

  const checkValidation = (event) => {
    if (!event.target.validity.valid) {
      for (const key in event.target.validity) {
          if (event.target.validity[key]) {
            setValidationError(errorMessages ? (errorMessages[key] || event.target.validationMessage || 'Invalid entry please provide correct input') : 'This field is required') 
          }
      }
  }
  }

  const inputValidationChange = (event) => {
    setValidationError('')
    checkValidation(event)
  }


  return (
    <>
      <div className='form-group-ele'>
        {
          isShowLabel && label &&
            <label className='inline-block mb-[0.2em]'>{label}</label>
        }
        
        <div>
          <select data-input-error={validationError ? true.toString() : false.toString()} value={value || ''} onBlur={inputValidationChange} className={`${classes} custom-select`} {...restProps} onChange={onSelectionChange}>
            {
              placeholder && 
              <option value="">{placeholder}</option>
            }
            
            {
              options.map(opt => (  
                <option key={opt[0]} value={opt[0]}>{opt[1]}</option>  
              ))
            }
          </select> 
          {
            validationError && 
            <span className='help-block'>{validationError}</span>
          }
        </div>
      </div>
    </>
  )
}

export default Select