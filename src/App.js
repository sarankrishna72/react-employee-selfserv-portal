import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './Pages/Auth/Login/Login';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import Auth from './Pages/Auth/Auth';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Dashboard from './Pages/Main/Dashboard/Dashboard';
import MyProfile from './Pages/Main/MyProfile/MyProfile';
import EmployeeList from './Pages/Main/Employee/EmployeeList/EmployeeList';
import EmployeeDetail from './Pages/Main/Employee/EmployeeDetail/EmployeeDetail';
import Sample from './Pages/Main/Sample/Sample';
import EmployeeDesignation from './Pages/Main/Employee/EmployeeDesignation/EmployeeDesignation';
import Department from './Pages/Main/Administration/Department/Department';
import Workshift from './Pages/Main/Administration/Workshift/Workshift';
import Holiday from './Pages/Main/Administration/Holiday/Holiday';
import AttendanceList from './Pages/Main/Attendance/AttendanceList/AttendanceList';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainLayout />}>
            <Route index  element={ <Dashboard title={'Dashboard'}/>} ></Route>
            <Route path='/MyProfile'  element={ <MyProfile title={'My Profile'}/>} ></Route>
            <Route path='/Sample'  element={ <Sample title={'Sample'}/>} ></Route>
            <Route path="/Attendance" exact>
              <Route index  element={ <AttendanceList title={'Attendance'}/>} ></Route>
            </Route>
            <Route path="/Employee" exact>
              <Route index  element={ <EmployeeList title={'All Employees'}/>} ></Route>
              <Route path="/Employee/Designation"  element={ <EmployeeDesignation title={'Designations'}/>} ></Route>
              <Route path="/Employee/Details/:id"  element={ <EmployeeDetail title={'Employee Details'}/>} ></Route>
            </Route>
            <Route path="/Administration" exact>
              <Route path="/Administration/Department"  element={ <Department title={'Departments'}/>} ></Route>
              <Route path="/Administration/Workshift"  element={ <Workshift title={'Workshifts'}/>} ></Route>
              <Route path="/Administration/Holiday"  element={ <Holiday title={'Holidays'}/>} ></Route>
            </Route>
          </Route>
          <Route path="/Auth" exact element={<AuthLayout />}>
            <Route index  element={ <Auth Component={Login} label={'Hi!'} message={'Login to your dashboard'} />} ></Route>
            <Route path='/Auth/Login'  element={ <Auth Component={Login} label={'Hi!'} message={'Login to your dashboard'} />} ></Route>
            <Route path='/Auth/ForgotPassword'  element={ <Auth Component={ForgotPassword} message={'Reset Password'} />} ></Route>
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
