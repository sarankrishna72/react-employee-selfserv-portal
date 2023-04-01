import React from 'react'
import './Note.scss'
const Note = ({children, type, title}) => {
  return (
    <>  
      <div>
        {
          title && 
          <div className='flex gap-2 items-center mb-3'>
            <i className='icns icon-book-open w-5 h-5'></i>
            <span className='text-[0.9rem]'>{title}</span>
          </div>
        }
      </div>
      <div className={`p-4 note text-[0.83rem] rounded-md note-${type}`}>
        <div className='max-sm:text-[11px] m-1'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Note