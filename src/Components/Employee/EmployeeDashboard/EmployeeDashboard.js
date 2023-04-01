import React from 'react'
import Card, { CardBody, CardHeader } from '../../Card/Card';
import Progressbar from '../../Progressbar/Progressbar';
import Button from '../../Form/Button';


const EmployeeDashboard = () => {
  return (
    <>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-8/12 lg:pr-2 flex flex-col justify-between'>
            <Card classes={'py-8 max-sm:py-4 mb-4 h-full justify-center'}>
              <CardBody classes={'relative !p-0'}>
                <div className='flex justify-between max-sm:pl-4 pl-8 mb-12'>
                  <div>
                      <div>
                        <div className='mb-[8px] '>Hi, John Doe</div>
                        <h5 className='text-xl leading-5'>
                          Good evening! 
                          <span className='text-afb1b6 text-[70%]'> You are 3 hours and 4. minutes late!</span>
                        </h5>
                      </div>
                  </div>
                </div>
                <div className='px-8 max-sm:px-4 flex'>
                  <div className='flex items-center mr-5'>
                    <div className='icon-box max-sm:!w-[45px] max-sm:!h-[45px] sm:!w-[60px] sm:!h-[60px] mr-2'>
                      <i className='icon-punch-in icns max-sm:w-[18px] max-sm:h-[18px] w-6 h-6'></i>
                    </div>
                    <div className='max-sm:text-[13px]'>
                      <h6 className='mb-1'>5:34 PM</h6>
                      <p className='text-secondary mb-1 leading-none'>Punch in time</p>
                    </div>
                  </div>
                  <div className='flex items-center '>
                    <div className='icon-box max-sm:!w-[45px] max-sm:!h-[45px] sm:!w-[60px] sm:!h-[60px] mr-2'>
                      <i className='icon-punch-out icns max-sm:w-[18px] max-sm:h-[18px]  w-6 h-6'></i>
                    </div>
                    <div className='max-sm:text-[13px]'>
                      <h6 className='mb-1'>11:34 PM</h6>
                      <p className='text-secondary mb-1 leading-none'>Punch out time</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <div className='flex flex-wrap'>
              <div className='w-1/2 max-md:w-full md:pr-2 mb-4'>
                <Card>
                  <CardBody classes={'flex justify-between items-center max-sm:!p-4'}>
                    <div>
                      <h5 className='mb-0 text-[15px]'>29</h5>
                      <p className='text-secondary max-sm:text-[12px] text-[14px] mb-0'>Total leave allowance</p>
                    </div>
                    <div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-success mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Paid - 12</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-warning mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Unpaid - 17</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='w-1/2 max-md:w-full md:pl-2  mb-4'>
                <Card>
                  <CardBody classes={'flex justify-between items-center max-sm:!p-4'}>
                    <div>
                      <h5 className='mb-0 text-[15px]'>29</h5>
                      <p className='text-secondary max-sm:text-[12px] text-[14px] mb-0'>Total leave taken</p>
                    </div>
                    <div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-success mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Paid - 12</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-warning mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Unpaid - 17</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='w-1/2 max-md:w-full md:pr-2  mb-4'>
                <Card>
                  <CardBody classes={'flex justify-between items-center max-sm:!p-4'}>
                    <div>
                      <h5 className='mb-0 text-[15px]'>29</h5>
                      <p className='text-secondary max-sm:text-[12px] text-[14px] mb-0'>Total leave available</p>
                    </div>
                    <div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-success mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Paid - 12</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-warning mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Unpaid - 17</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='w-1/2 max-md:w-full md:pl-2  mb-4'>
                <Card>
                  <CardBody classes={'flex justify-between items-center max-sm:!p-4'}>
                    <div>
                      <h5 className='mb-0 text-[15px]'>29</h5>
                      <p className='text-secondary max-sm:text-[12px] text-[14px] mb-0'>Leave request pending</p>
                    </div>
                    <div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-success mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Paid - 12</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[12px] h-[12px] rounded bg-warning mr-[5px]'></div>
                        <p className='text-[13px] mb-0'>Unpaid - 17</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-4/12 lg:pl-2'>
            <Card classes={'mb-4'}>
              <CardHeader classes={'p-4'}>
                <h4 className='text-[1.25rem]'>Time log</h4>
              </CardHeader>
              <CardBody classes={'!p-6'}>
                <div className='mb-4'>
                  <div className='border-bottom mb-3'>
                    <h5 className='text-[1.05rem] mb-1 '>Today</h5>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      <h6 className='mb-0 font-medium'>08:00</h6>
                      <p className='text-secondary text-[12px] mb-0 '>Scheduled</p>
                    </div>
                    <div>
                      <h6 className='mb-0 font-medium'>06:00</h6>
                      <p className='text-secondary text-[12px] mb-0 '>Worked</p>
                    </div>
                    <div>
                      <h6 className='mb-0 font-medium'>02:00</h6>
                      <p className='text-secondary text-[12px] mb-0 '>Balance</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='border-bottom mb-3'>
                    <h5 className='text-[1.05rem] mb-1 '>This Month</h5>
                  </div>
                  <div className='flex items-center mb-4'>
                    <div>
                      <Button classes={'!w-[55px] !h-[55px] mr-3 pointer-events-none'} btnType="primary">
                        <div className='flex items-center justify-center rounded'>
                          <i className='icns icon-clock w-5 h-5 icon-white-filter'></i>
                        </div>
                      </Button>
                    </div>
                    <div>
                      <h5 className='mb-0 text-[1.05rem]'>152 h</h5>
                      <p className='text-secondary text-[12px] mb-0 '>Total schedule time</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='mb-3'>
                    <p className='text-[12px] mb-1'>Worked time - 88 h</p>
                    <Progressbar progress={50}/>
                  </div>
                  <div className='mb-3'>
                    <p className='text-[12px] mb-1'>Shortage time - 88 h</p>
                    <Progressbar progress={50}/>
                  </div>
                  <div className='mb-3'>
                    <p className='text-[12px] mb-1'>Over time - 0 m</p>
                    <Progressbar progress={0}/>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* <div></div> */}
        </div>
    </>
  )
}

export default EmployeeDashboard