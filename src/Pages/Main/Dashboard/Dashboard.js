import React, { useState, useEffect } from 'react'
import EmployeeDashboard from '../../../Components/Employee/EmployeeDashboard/EmployeeDashboard';
import Button from '../../../Components/Form/Button';
import './Dashboard.scss';
import AdminDashboard from '../../../Components/Admin/AdminDashboard/AdminDashboard';
import Moment from 'react-moment';
import 'moment-timezone';
const Dashboard = ({title}) => {
  var [date,setDate] = useState(new Date());
    
    useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 );
      return function cleanup() {
        clearInterval(timer)
      }
    }, []);
  return (
    <>
      <section id='dashboard' className='py-4'>
        <div className='flex max-sm:block justify-between mb-4 '>
          <div className='flex justify-between'>
            <h4 className='main-title'>{title}</h4>
            <div className='hidden text-dark-grey sm:text-right max-sm:flex-col max-sm:flex max-sm:mb-1'>
              <div className='text-[18px] font-semibold'>
                </div>
              <div className='text-[12px] font-light'><Moment format={'dddd'} date={date}></Moment></div>
            </div>
          </div>
          <div className='flex flex-wrap gap-4 '>
            <div className='hidden text-dark-grey sm:text-right sm:flex-col sm:flex max-sm:w-full'>
              <div className='text-[18px] font-semibold'><Moment format={'hh:mm A'} date={date}></Moment></div>
              <div className='text-[12px] font-light'><Moment format={'dddd'} date={date}></Moment></div>
            </div>
            <Button btnType={'primary'}>Punch In</Button>
            <Button btnType={'primary-outline'} classes={'!bg-transparent !px-5'}>View As Admin</Button>
          </div>
        </div>
        <div>
          {/* <EmployeeDashboard></EmployeeDashboard> */}
          <AdminDashboard></AdminDashboard>
        </div>
      </section>
    </>
  )
}

export default Dashboard