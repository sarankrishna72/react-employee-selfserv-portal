import React from 'react'
import './Timeline.scss'
const Timeline = ({timelines = []}) => {
  return (
    <>
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
            
            {
                timelines.length > 0 &&
                timelines.map((timeline, index) => {
                    return(
                       
                        <div key={`timeline-${index}`} className='flex items-center timeline lg:mx-[3rem] mb-[5rem]'>
                            <div className='max-sm:w-[75px] sm:w-[100px] sm:min-w-[100px] text-right'>
                                <p className=' text-primary max-sm:text-[12px] sm:text-[14px]'>{timeline.title}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className={` ${((timelines.length - 1) === index) ? '' : 'timeline-icon'} sm:mx-[1.3rem] max-sm:mx-[0.75rem]`}>
                                    <div className='w-10 h-10 flex items-center justify-center rounded-full default-base-bg-color'>
                                        <i className={`icns ${timeline.icon || 'icon-flag'} w-4 h-4 icon-default-filter`}></i>
                                    </div>
                                </div>
                                <div className='timeline-content'>
                                    <div className='single-record'>
                                        <div className='max-sm:text-[11px] sm:text-[13px] mb-0'>{timeline.label}</div>
                                        {
                                            timeline.subLabel && 
                                            <div>
                                                <p className='mb-0 max-sm:text-[9px] sm:text-[11px] text-secondary'>
                                                    {timeline.subLabel}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    </>
  )
}

export default Timeline