import React, { useState } from 'react'
import Card, { CardBody, CardHeader } from '../../Card/Card'
import Button from '../../Form/Button'
import './AdminDashboard.scss'
import { Bar, Pie } from '@ant-design/plots';
import { employeeStatus, employeeDesignation, employeeDepartment, attendanceTotal } from '../../../MockData/DashboardChartData';
import { horizontalBarConfiguration, pieChartConfiguration } from '../../../Configuration/ChartConfiguration';

const AdminDashboard = () => {

  const [chartData, setChartData] = useState(employeeStatus)
  const [filterItem, setFilterItem] = useState('employeeStatus')
  
  // const config = {
  //   data: chartData,
  //   xField: 'value',
  //   yField: 'type',
  //   autoFit: true,
  //   seriesField: 'type',
  //   color: "#00b48c",
  //   barWidthRatio: 0.3,
  //   legend: false,
  // };

  const widgetData = [
    {
      label: 'Total employees',
      count: 14,
      icon: 'icon-user'
    },{
      label: 'Total departments',
      count: 1,
      icon: 'icon-home'
    },{
      label: 'Total leave requests',
      count: 14,
      icon: 'icon-edit'
    },{
      label: 'On leave today',
      count: 0,
      icon: 'icon-user'
    }
  ]

  return (
    <>
      <div className='sm:flex flex-wrap dashboard-summary'>
        {
          widgetData.map((x, index) => {
            return(
              <div className='widget-container flex-1 mb-4 ' key={index}>
                <Card classes={'dashboard-widgets   '}>
                  <CardBody classes={'flex'}>
                    <div className=''>
                      <Button classes={'!w-[50px] !h-[50px] pointer-events-none'} btnType='primary'>
                        <i className={`icns ${x.icon} w-6 h-6 icon-white-filter`}></i>
                      </Button>
                    </div>
                    <div className='widget-data ml-3'>
                      <h6>{x.count}</h6>
                      <p className='text-[80%] mb-0 '>{x.label}</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            )
          })
        }
      </div>
      <div className='flex flex-wrap'>
        <div className='xl:w-9/12 w-full lg:w-8/12 lg:pr-2'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <h4 className='mb-0 text-[1.25rem] flex-shrink-0 max-sm:mb-2'>Employee Statics</h4>
                <div className='flex gap-2 max-sm:text-[65%] text-[70%]'>
                  <div onClick={() => {setFilterItem('employeeStatus'); setChartData(employeeStatus)}} className={`cursor-pointer ${filterItem === 'employeeStatus' ? '!text-primary' : ''}`}>By employement status</div>
                  <div onClick={() => {setFilterItem('employeeDesignation'); setChartData(employeeDesignation)}} className={`cursor-pointer ${filterItem === 'employeeDesignation' ? '!text-primary' : ''}`}>By Designation</div>
                  <div onClick={() => {setFilterItem('employeeDepartment'); setChartData(employeeDepartment)}} className={`cursor-pointer ${filterItem === 'employeeDepartment' ? '!text-primary' : ''}`}>By Department</div>
                </div>
              </div>
              
            </CardHeader>
            <CardBody classes={'!p-6'}>
              <div className='max-lg:h-[300px] lg:h-[400px]'>
                <Bar {...horizontalBarConfiguration(chartData, 'value', 'type')} />
              </div>
             
            </CardBody>
          </Card>
         
        </div>
        <div className='xl:w-3/12 lg:w-8/12 w-full max-lg:mt-4 lg:pl-2'>
          <Card classes={'h-full'}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <h4 className='mb-0 text-[1.25rem] max-md:text-[1rem]'>Total Attendance Today - 11</h4>
              </div>
            </CardHeader>
            <CardBody>
              <div>
                <Pie {...pieChartConfiguration(attendanceTotal, 'value', 'type', 'Attendance', {colorField: 'type', legend: { layout: 'horizontal', position: 'bottom' },color: ['#fc6510', '#e50404', '#00b48c']})} />
              </div>
            </CardBody>
            
          </Card>
        </div>
      </div>
      
    </>
  )
}

export default AdminDashboard