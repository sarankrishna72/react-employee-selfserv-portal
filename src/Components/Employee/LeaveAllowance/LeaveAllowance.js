import React from 'react'
import Note from '../../Note/Note';
import './LeaveAllowance.scss';

const AllowanceCard = ({data, classes = ''}) => {
    return(
        <>
            <div className={`allowance-card w-full default-base-bg-color rounded-lg ${classes}`}>
                <div className='p-4 flex justify-between items-center gap-2 border-bottom '>
                    <span className='text-[0.9rem]'>Paid Casual</span>
                    <div className='w-6 h-6 flex items-center justify-center rounded-full ripple'>
                       <i className='icns icon-horizontal-three-dots w-4 h-4'></i>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='text-[0.9rem]'>
                        <span className='text-secondary mr-1'>Type</span>
                        Paid
                    </div>
                    <div  className='text-[0.9rem]'>
                        <span className='text-secondary mr-1'>Allowance</span>
                        5.00
                    </div>
                    <div  className='text-[0.9rem]'>
                        <span className='text-secondary mr-1'>Earned</span>
                        10.00
                    </div>
                    <div  className='text-[0.9rem]'>
                        <span className='text-secondary mr-1'>Taken</span>
                        0.00
                    </div>
                    <div  className='text-[0.9rem]'>
                        <span className='text-secondary mr-1'>Availability</span>
                        10.00
                    </div>
                </div>
            </div>
        </>
    )
}

const LeaveAllowance = () => {

  return (
    <>
        <div>
            <div>
                <Note title={'Allowance Policy'} type={'warning'}>
                    1.  Leave will start from the month of January <br/>
                    2. Any type of change will be effective on the next day.
                </Note>
            </div>
            <div className='mt-6 flex xl:gap-[1.33rem] max-lg:gap-[1rem] lg:gap-[1.5rem] flex-wrap'>
                <div className='xl:w-[calc(25%-1rem)] lg:w-[calc(33.33%-1rem)]  max-sm:!w-full sm:w-[calc(50%-0.5rem)]'>
                    <AllowanceCard />
                </div>
                <div className='xl:w-[calc(25%-1rem)] lg:w-[calc(33.33%-1rem)] max-sm:!w-full sm:w-[calc(50%-0.5rem)]'>
                    <AllowanceCard />
                </div>
                <div className='xl:w-[calc(25%-1rem)] lg:w-[calc(33.33%-1rem)] max-sm:!w-full sm:w-[calc(50%-0.5rem)]'>
                    <AllowanceCard />
                </div>
                <div className='xl:w-[calc(25%-1rem)] lg:w-[calc(33.33%-1rem)] max-sm:!w-full sm:w-[calc(50%-0.5rem)]'>
                    <AllowanceCard />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default LeaveAllowance