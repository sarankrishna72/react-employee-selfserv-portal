import React from 'react'
import './EmployeeDocument.scss'

const EmployeeDocument = () => {
    const arry = [1,2,3,4,5,6,7,8]
  return (
    <>
        <div className='flex flex-wrap gap-4'>
            {
                arry.map((x) => {
                    return(
                        <div key={x} className='max-sm:w-full relative border-secondary rounded-sm flex  sm:min-w-[320px]' style={{'flex': '1 1 auto'}}>
                            {/*w-full sm:w-[calc(50%-.5rem)] md:w-[calc(50%-.5rem)]  lg:w-[calc(33.33%-0.5rem)] 2xl:w-[calc(25%-.5rem)]*/}
                            <div className='flex  gap-2 p-3 w-full  '>
                                <div className='attachment'>
                                    <img src='http://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2021/05/29/55992-pan-card.png?itok=Cvf7jnTU' className='w-20  sm:w-24' alt='attachment' />
                                </div>
                                <div>
                                    <div className='text-[14px]'>Aadhar Card</div>
                                    <div className='text-99a5b5 text-[11px]'>1 seconds ago</div>
                                </div>
                                <div className='flex absolute right-[10px] top-[10px]'>
                                    <div className=' w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center cursor-pointer ripple rounded-md'>
                                        <i className='icns icon-edit w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]'></i>
                                    </div>
                                    <div className=' w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center cursor-pointer ripple rounded-md'>
                                        <i className='icns  icon-delete  w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]'></i>
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

export default EmployeeDocument