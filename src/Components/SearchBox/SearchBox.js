import React from 'react'
import'./SearchBox.scss'

const SearchBox = ({placeholder, classes}) => {
  return (
    <>
        <div className={`search-box flex ${classes || ''}`}>
            <span className='flex items-center p-2 bg-[#eff1f5]'>
                <i className='icns icon-search w-[15px] h-[15px]'></i>
            </span>
            <input className='flex-1' placeholder={placeholder || 'Start typing to search'} />
        </div>
    </>
  )
}

export default SearchBox