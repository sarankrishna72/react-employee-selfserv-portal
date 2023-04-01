import React from 'react'
import './EmployeeHistory.scss'
import { employeeTimelineData } from '../../../MockData/EmployeeData';
import Timeline from '../../Timeline/Timeline';

const EmployeeHistory = () => {
  return (
    <>
        {
            <Timeline timelines={employeeTimelineData} />
        }
    </>
  )
}

export default EmployeeHistory