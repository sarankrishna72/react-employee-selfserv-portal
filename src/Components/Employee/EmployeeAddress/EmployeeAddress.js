import React from 'react'
import { EmployeeAddressDetails, employeeIcons } from '../../../MockData/EmployeeData'
import './EmployeeAddress.scss'

const EmployeeAddress = () => {
  return (
    <div id="employee-address">
      {
         Object.keys(EmployeeAddressDetails).map((addressKey) => {
          return (
            <div key={addressKey} className='flex flex-wrap text-[14px] gap-[.5rem] justify-between xl:gap-[1.5rem] mb-6'>
              <div className=' w-full xl:w-[calc(33.33%-1rem)] md:w-[calc(50%-1rem)]'>
                <div className='flex items-center'>
                  <div className='w-[40px] min-w-[40px] h-[40px] default-base-bg-color  rounded-full flex items-center justify-center'>
                    <i className={`icns ${employeeIcons[addressKey]} icon-default-filter w-5 h-5 `}></i>
                  </div>
                  <h6 className='ml-3'>{addressKey}</h6>
                </div>
              </div>
              <div className='sm:w-[calc(75%-1rem)] xl:w-[calc(50%-1rem)] text-[14px]  max-xl:text-[13px]'>
                <p className='mb-0'>{EmployeeAddressDetails[addressKey]['address']}</p>
                <p className='mb-0'>{EmployeeAddressDetails[addressKey]['area']}</p>
                <p className='mb-0'>{EmployeeAddressDetails[addressKey]['city']},{EmployeeAddressDetails[addressKey]['state']}, {EmployeeAddressDetails[addressKey]['zip_code']}</p>
                <div className='flex items-center'>
                  <span className="material-symbols-outlined text-[15px] text-primary">call</span>
                  <p className='mb-0 ml-2'>{EmployeeAddressDetails[addressKey]['phone_number']}</p>
                </div>
              </div>
              <div className='xl:w-[calc(16.66%-1rem)] sm:w-[calc(25%-1rem)] max-sm:w-full'>
                <div className='flex justify-end'>
                  <div className='w-[35px] h-[35px] ripple cursor-pointer rounded-full flex items-center justify-center'>
                    <i className='icns icon-edit w-[18px] h-[18px] icon-default-filter'></i>
                  </div>
                  <div className='w-[35px] h-[35px] ripple cursor-pointer rounded-full flex items-center justify-center'>
                    <i className='icns icon-delete w-[18px] h-[18px] icon-default-filter'></i>
                  </div>
                </div>
              </div>
            </div>
          )
         })
      }
      
    </div>
  )
}

export default EmployeeAddress