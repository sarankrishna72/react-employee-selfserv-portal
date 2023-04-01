import React from 'react'
import './Progressbar.scss'
const Progressbar = ({progress}) => {
  return (
    <>
        <div className='progress animate-progress !h-[10px] default-base-bg-color relative !round-[20px]'>
            <div className='progress-bar' role={'progressbar'} style={{'width': progress+"%"}}></div>
        </div>
    </>
  )
}

export default Progressbar