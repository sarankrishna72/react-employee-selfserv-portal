import React, { useState } from 'react'
import './DisplayType.scss'
const DisplayType = ({changeView}) => {
  const [viewType, setViewType] = useState('table')
  return (
    <>
        <div className='inline-flex min-w-[100px] relative border-primary rounded-md items-center'>
            <div className={`p-2 inline-flex justify-center ripple  flex-1 text-primary cursor-pointer ${viewType === 'table' ? 'active-item': ''}`} onClick={() => {setViewType('table');changeView('table')}}>
                <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
            </div>
            <div className={`p-2 inline-flex justify-center flex-1 ripple cursor-pointer ${viewType === 'calender' ? 'active-item': ''}`} onClick={() => {setViewType('calender');changeView('calender')}}>
                <span className="material-symbols-outlined text-[20px] text-primary">calendar_month</span>
            </div>
        </div>
    </>
  )
}

export default DisplayType