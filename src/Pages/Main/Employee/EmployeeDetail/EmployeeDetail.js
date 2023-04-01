import React, { useState } from 'react'
import './EmployeeDetails.scss'
import VerticalTab, { VerticalTabItem } from '../../../../Components/VerticalTab/VerticalTab';
import { EmployeeProfileTabList } from '../../../../Configuration/TabConfiguration';
import PersonalDetails from '../../../../Components/PersonalDetails/PersonalDetails';
import { myProfileInputs } from '../../../../Configuration/FormInputConfiguration';
import EmployeeLeave from '../../../../Components/Employee/EmployeeLeave/EmployeeLeave';
import LeaveAllowance from '../../../../Components/Employee/LeaveAllowance/LeaveAllowance';
import EmployeeAttendance from '../../../../Components/Employee/EmployeeAttendance/EmployeeAttendance';
import EmployeeDocument from '../../../../Components/Employee/EmployeeDocument/EmployeeDocument';
import EmployeeHistory from '../../../../Components/Employee/EmployeeHistory/EmployeeHistory';
import EmployeePayrunAndBadge from '../../../../Components/Employee/EmployeePayrunAndBadge/EmployeePayrunAndBadge';
import EmployeeAddress from '../../../../Components/Employee/EmployeeAddress/EmployeeAddress';
import EmployeeEmergencyContact from '../../../../Components/Employee/EmployeeEmergencyContact/EmployeeEmergencyContact';


const EmployeeDetail = ({title}) => {
const [tab, setTab] = useState('')
  return (
    <section id='my-profile' className='py-4'>
        <div className='flex max-sm:block justify-between mb-4 '>
            <div className='flex justify-between'>
                <h4 className='main-title'>{title}</h4>
            </div>
        </div>
        <div className='w-full'>
        <VerticalTab  tabChange={(event) => setTab(event)}  tabIcon='icon-user' tabList={EmployeeProfileTabList}>
            <VerticalTabItem title="Personal Details" target={'PersonalDetails'}>
                {
                    tab === 'PersonalDetails' && 
                    <PersonalDetails profileInputs={myProfileInputs} />
                }
            </VerticalTabItem>
            <VerticalTabItem title="Leave Allowance" target={'LeaveAllowance'}>
                {
                    tab === 'LeaveAllowance' && 
                    <LeaveAllowance />
                }
            </VerticalTabItem>
            <VerticalTabItem title="Attendance" target={'Attendance'}>
                {
                    tab === 'Attendance' && 
                    <EmployeeAttendance/>
                }
            </VerticalTabItem>
            <VerticalTabItem title="Leave" target={'Leave'}>
                {
                    tab === 'Leave' && 
                    <EmployeeLeave/>
                }               
            </VerticalTabItem>
            <VerticalTabItem title="Documents" target={'Documents'}>
                {
                    tab === 'Documents' && 
                    <EmployeeDocument/>
                }               
            </VerticalTabItem>
            <VerticalTabItem title="Job History" target={'JobHistory'}>
                {
                    tab === 'JobHistory' && 
                    <EmployeeHistory/>
                }               
            </VerticalTabItem>
            <VerticalTabItem title="Payrun And Badge" target={'Payrun'}>
                {
                    tab === 'Payrun' && 
                    <EmployeePayrunAndBadge/>
                }               
            </VerticalTabItem>
            <VerticalTabItem title="Address Details" target={'AddressDetails'}>
                {
                    tab === 'AddressDetails' && 
                    <EmployeeAddress/>
                }               
            </VerticalTabItem>
            <VerticalTabItem title="Emergency Contacts" target={'EmergencyContact'}>
                {
                    tab === 'EmergencyContact' && 
                    <EmployeeEmergencyContact/>
                }               
            </VerticalTabItem>
        </VerticalTab>
        </div>
    </section>
  )
}

export default EmployeeDetail