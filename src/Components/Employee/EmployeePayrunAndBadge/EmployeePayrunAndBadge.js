import React from 'react'
import './EmployeePayrunAndBadge.scss'
import Note from '../../Note/Note';
import { payrunConfigLists, employeeIcons } from '../../../MockData/EmployeeData';

const EmployeePayrunAndBadge = () => {
  return (
    <>
        <Note title={'Why Payrun & Badge?'} type='warning'>
            <ol className='list-decimal ml-4'>
                <li>By default all payrun and beneficiary badges is set from default Setting</li>
                <li>You can individually update or change these values from the edit option.</li>
            </ol>
        </Note>
        <div className='pt-8'>
            {
                Object.keys(payrunConfigLists).map((config, index) => {
                    return (
                        <div key={config} className='flex items-center text-[14px] flex-wrap max-sm:gap-[10px] sm:gap-[15px] max-sm:mb-8 mb-5'>
                            <div className=' w-full sm:w-[calc(40%-10px)]'>
                                <div className='flex items-center mb-2'>
                                    <div className='w-[40px] min-w-[40px] h-[40px] default-base-bg-color  rounded-full flex items-center justify-center'>
                                        <i className={`icns ${employeeIcons[config]} icon-default-filter w-4 h-4`}></i>
                                    </div>
                                    <div>
                                        <h6 className='ml-3'>{config}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='max-sm:flex-1  max-lg:text-[13px]  sm:w-[calc(50%-10px)]'>
                                    {
                                        typeof(payrunConfigLists[config]) === 'string' &&
                                            <p className='mb-0'>{payrunConfigLists[config]}</p>
                                    }
                                    {
                                        typeof(payrunConfigLists[config]) !== 'string' &&
                                            Object.keys(payrunConfigLists[config]).map((configItem, cofigIndex) => {
                                                return(
                                                    <div key={`${payrunConfigLists[config]}-${payrunConfigLists[config][configItem]}`} className={`flex gap-[10px] flex-wrap items-center ${((Object.keys(payrunConfigLists[config]).length - 1) != cofigIndex) ? 'mb-2': ''} `}>
                                                        <div className='w-[calc(75%-5px)]'>{configItem}</div>
                                                        <div className='w-[calc(25%-5px)]'>{payrunConfigLists[config][configItem]}</div>
                                                    </div>
                                                )
                                            })
                                    }
                                {/*  */}
                            </div>
                            <div className='sm:w-[calc(10%-10px)]'>
                                {
                                    index !== 0 &&
                                    <div className='w-[40px] h-[40px] ripple cursor-pointer rounded-full flex items-center justify-center'>
                                        <i className='icns icon-edit w-5 h-5 icon-default-filter'></i>
                                    </div>
                                }
                               
                                
                            </div>
                        </div>
                    )
                })
            }
            


            {/* <div className='flex items-center text-[14px] flex-wrap max-sm:gap-[10px] sm:gap-[15px] max-sm:mb-8 mb-5'>
                <div className=' w-full sm:w-[calc(40%-10px)]'>
                    <div className='flex items-center mb-2'>
                        <div className='w-[40px] min-w-[40px] h-[40px] default-base-bg-color  rounded-full flex items-center justify-center'>
                            <i className='icns icon-plus icon-default-filter w-4 h-4'></i>
                        </div>
                        <div>
                            <h6 className='ml-3'>Allowance</h6>
                        </div>
                    </div>
                </div>
                <div className='max-sm:flex-1 max-lg:text-[13px]  sm:w-[calc(50%-10px)]'>
                    <div className='flex gap-[10px] flex-wrap items-center mb-2'>
                        <div className='w-[calc(75%-5px)]'>Project Completion Bonus</div>
                        <div className='w-[calc(25%-5px)]'>10%</div>
                    </div>
                    <div className='flex gap-[10px] flex-wrap items-center mb-2'>
                        <div className='w-[calc(75%-5px)]'>Mobile Phone Reimbursement</div>
                        <div className='w-[calc(25%-5px)]'>40,833</div>
                    </div>
                    <div className='flex gap-[10px] flex-wrap items-center'>
                        <div className='w-[calc(75%-5px)]'>Medical Reimbursement</div>
                        <div className='w-[calc(25%-5px)]'>20,417</div>
                    </div>
                </div>
                <div className='sm:w-[calc(10%-10px)]'>
                    <div className='w-[40px] h-[40px] ripple cursor-pointer rounded-full flex items-center justify-center'>
                        <i className='icns icon-edit w-5 h-5 icon-default-filter'></i>
                    </div>
                </div>
            </div>

            <div className='flex items-center text-[14px] flex-wrap max-sm:gap-[10px] sm:gap-[15px] max-sm:mb-8 mb-5'>
                <div className=' w-full sm:w-[calc(40%-10px)]'>
                    <div className='flex items-center mb-2'>
                        <div className='w-[40px] min-w-[40px] h-[40px] default-base-bg-color  rounded-full flex items-center justify-center'>
                            <i className='icns icon-minus icon-default-filter w-4 h-4'></i>
                        </div>
                        <div>
                            <h6 className='ml-3'>Deduction</h6>
                        </div>
                    </div>
                </div>
                <div className='max-sm:flex-1 max-lg:text-[13px]  sm:w-[calc(50%-10px)]'>
                    <div className='flex gap-[10px] flex-wrap items-center mb-2'>
                        <div className='w-[calc(75%-5px)]'>Professional Tax</div>
                        <div className='w-[calc(25%-5px)]'>200</div>
                    </div>
                    <div className='flex gap-[10px] flex-wrap items-center mb-2'>
                        <div className='w-[calc(75%-5px)]'>TDS</div>
                        <div className='w-[calc(25%-5px)]'>8,857</div>
                    </div>
                    <div className='flex gap-[10px] flex-wrap items-center'>
                        <div className='w-[calc(75%-5px)]'>Loan Repayment</div>
                        <div className='w-[calc(25%-5px)]'>5,000</div>
                    </div>
                </div>
                <div className='sm:w-[calc(10%-10px)]'>
                    <div className='w-[40px] h-[40px] ripple cursor-pointer rounded-full flex items-center justify-center'>
                        <i className='icns icon-edit w-5 h-5 icon-default-filter'></i>
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default EmployeePayrunAndBadge