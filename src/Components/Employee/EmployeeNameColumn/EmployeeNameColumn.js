import React from 'react'

const EmployeeNameColumn = ({name, designation, profilePic}) => {
    return(
        <>
          <div className='flex  items-center w-[225px]'>
              <a href="https://demo.worksuite.biz/account/employees/18" className='relative'>
                  <img src={profilePic || "https://i.pravatar.cc/300?u=rogahn.dovie@example.org"} className="mr-2 inline-block object-cover overflow-hidden w-[30px] h-[30px] rounded-full" alt={name} title={name} />
              </a>
              <div className='media-body'>
                  <a className='default-anchor text-dark-grey font-medium' href="https://demo.worksuite.biz/account/employees/18">{name}</a>
                  <p className="mb-0 font-normal text-[11px] ">{designation}</p>
              </div>
          </div>
        </>
      )
}

export default EmployeeNameColumn
