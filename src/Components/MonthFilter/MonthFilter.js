import React from 'react'
import './MonthFilter.scss'
const MonthFilter = () => {
  return (
    <>
        <div className='flex gap-2 items-center max-sm:!pb-4 sm:!pb-6  border-bottom'>
            <div className='w-7 h-7 icon-default-hover cursor-pointer flex justify-center items-center rounded-full ripple'>
                <i className='icns icon-left-arrow icon-secondary-filter w-5 h-5'></i>
            </div>
            <div className='text-primary'>December, 2022</div>
            <div className='w-7 h-7 icon-default-hover cursor-pointer flex justify-center items-center rounded-full ripple'>
                <i className='icns icon-right-arrow icon-secondary-filter  w-5 h-5'></i>
            </div>
        </div>
    </>
  )
}

export default MonthFilter