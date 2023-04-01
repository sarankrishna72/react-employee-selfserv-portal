import React from 'react'
import Button from '../../Form/Button'
import { employeeEmergencyContacts } from '../../../MockData/EmployeeData';

const EmployeeEmergencyContact = () => {
  return (
    <section id='emergency-contacts'>

        {
            employeeEmergencyContacts.map((contact, index) => {
                return (
                    <div key={`contact-${index}`} className='flex items-center gap-[15px] text-[14px] flex-wrap mb-6'>
                        <div className='max-lg:w-full lg:w-4/12'>
                            <div className='flex gap-[15px] items-center'>
                                <div className='w-[40px] min-w-[40px] h-[40px] default-base-bg-color  rounded-full flex items-center justify-center'>
                                    <i className='icns icon-user icon-default-filter w-5 h-5'></i>
                                </div>
                                <div>{contact.name}</div>
                            </div>
                        </div>
                        <div className='max-lg:w-8/12 flex-1 max-lg:pl-4 max-lg:text-[13px] lg:w-6/12'>
                            <div className='flex gap-[15px] items-center mb-2'>
                                <i className='icns icon-user-group icon-default-filter w-4 h-4'></i>
                                <div>{contact.relationship}</div>
                            </div>
                            <div className='flex gap-[15px] items-center mb-2'>
                                <i className='icns icon-phone icon-default-filter w-4 h-4'></i>
                                <div>{contact.phone_number}</div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <i className='icns icon-mail icon-default-filter min-w-[1rem] w-4 h-4'></i>
                                <div>{contact.email}</div>
                            </div>
                        </div>
                        <div className='max-lg:w-full'>
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
        
        <div className='flex justify-end mt-6'>
            <Button>Add new Contact</Button>
        </div>
    </section>
  )
}

export default EmployeeEmergencyContact