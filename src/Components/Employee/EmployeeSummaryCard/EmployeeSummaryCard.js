import React from 'react'
import './EmployeeSummaryCard.scss'
const EmployeeSummaryCard = ({label, value, color}) => {
  return (
    <>
        <div className='w-full default-base-bg-color h-full flex flex-col justify-center items-center rounded-lg p-4 text-center'>
            <h5 className={`text-[1.25rem] ${color}`}>{value}</h5>
            <p className="text-secondary text-[0.85rem] mt-[.10rem] mb-0">{label}</p>
        </div>
    </>
  )
}

export default EmployeeSummaryCard