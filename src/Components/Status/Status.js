import React from 'react'

const Status = ({status}) => {
    const getbgColor = (status) => {
        status = status?.toLowerCase();
        switch (true) {
          case status === 'active' || status === 'approved':
            return "bg-green-600"
          case status === 'resigned' || status === 'rejected' || status === 'deactivated':
            return "bg-red-600"
          case status === 'probation' || status === 'pending':
            return " bg-orange-400"
        default:
            return '';
        }
    }
    return(
        <>
          <div className='flex justify-center items-center '>
            <div className={`w-[10px] h-[10px] rounded-full  mr-2 ${getbgColor(status)}`} ></div>
            <span>{status}</span>
          </div>
        </>
    )
}

export default Status