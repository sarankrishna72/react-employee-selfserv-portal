import React, { useEffect, useState } from 'react'
import './Filter.scss'
const Filter = ({options = [], isSearch = false, placeholder = 'All', classes, isMultiple = false, selectedItems}) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [label, setLabel] = useState(placeholder)
  const selectedOpt = (selectedItem) => {
    if (selectedItem.length  ===  0) {
      setSelectedOptions([])
    } else {
      if (isMultiple) {
        let items = JSON.parse(JSON.stringify(selectedOptions))
        if (selectedOptions.includes(selectedItem)) {
          items = items.filter(x => (x !== selectedItem))
          setSelectedOptions(items)
        } else {
          items.push(selectedItem)
          setSelectedOptions(items)
        }
      } else {
        setSelectedOptions([selectedItem])
      }
    }

    selectedItems(selectedOptions)
   
  }

  useEffect(() => {
    if (selectedOptions.length > 0) {
      let element = options.filter((opt) => opt[0] === selectedOptions[selectedOptions.length - 1] )
      if (selectedOptions.length > 1) {
        let st = `${element[0][1]} + ${selectedOptions.length - 1}`;
        setLabel(st)
      } else {
        setLabel(element[0][1])
      }
    } else {
      setLabel(placeholder)
    }
  }, [selectedOptions, placeholder, options])

  const checkItems = (item) => {
    for (const data of selectedOptions) {
      if (item === data) {
        return true;
      }
    }
    return false
  }

  return (
    <>
      <div  className={`${classes || ''} relative  rounded-md hover:bg-white bg-[#eff1f5] page-filter`} role={'list'}>
          <button className='flex h-10 p-2 pr-4 ripple rounded-md filter-container items-center w-full'>
          <div className='flex items-center gap-2 w-full'>
              <i className='icns icon-filter-grey w-[15px] h-[15px] shrink-0'></i>
              <div className='overflow-hidden whitespace-nowrap text-[13px] text-ellipsis text-secondary'>
                {label}
              </div>
          </div>
          </button>
          <div className='bg-white absolute w-full hidden py-2 max-h-64 z-30 rounded filter-data-container'>
            {placeholder && 
              <div className={` ${selectedOptions.length === 0 ? 'checkedItems' : '' } filter-item p-2 text-[13px] text-secondary ripple`} onClick={() => selectedOpt([])}>{placeholder}</div>
            }
            {
              options && 
              options.map((opt) => {
                return <div key={opt[0]} className={` ${checkItems(opt[0])  ? 'checkedItems' : '' } filter-item p-2 text-[13px] text-secondary ripple`} onClick={() => selectedOpt(opt[0])}>{opt[1]}</div>
              })
            }              
          </div>
      </div>
  </>
  )
}

export default Filter