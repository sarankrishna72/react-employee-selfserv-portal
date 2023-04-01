import React from 'react'
import { Link } from 'react-router-dom';
import './LeftBar.scss';

const LeftBar = () => {


  const toggleCollapse = (event) => {
    
    const items = document.querySelectorAll("[data-toggle-menu-id]");
    const collapsableParentItem = document.querySelector(`[data-toggle-menu-id="${event}"]`)
    collapsableParentItem.setAttribute("aria-expanded", (collapsableParentItem.ariaExpanded === 'false' ? 'true': 'false'));
    for (let index = 0; index < items.length; index++) {
      if ((items[index].dataset['toggleMenuId'] === event)) {
        if (items[index].classList.contains("show")) {
          items[index].classList.remove("show");
        } else {
          items[index].classList.add("show")
        }
      } else {
        items[index].classList.remove("show")
      } 
    }
  }

  return (
    <nav id='side-bar' className='sidebar sidebar-offcanvas'>
      <div className='text-center navbar-brand-wrapper max-lg:hidden lg:flex items-center justify-center'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/flogic-white-logo.svg`} className={'w-[46px]'} alt="fortelogic logo"/>
      </div>
      <ul className='nav nav-scrolling'>

        <li className='nav-item active'>
          <Link to={"#aaa"} className="nav-link flex items-center whitespace-nowrap py-2 ">
            <span className='icon-wrapper'>
              <i className='icns menu-ic icon-pie-chart w-5 h-5 '></i>
            </span>
            <span className='menu-title hidden'>Dashboard</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to={"#aa"} data-toggle-id="leave" data-toggle="collapse" onClick={() => toggleCollapse("leave")}  aria-expanded="false" className="nav-link flex items-center justify-between whitespace-nowrap py-2 ">
            <span className='flex items-center'>
              <span className='icon-wrapper'>
                <i className='icns menu-ic icon-clock w-5 h-5 '></i>
              </span>
              <span className='menu-title hidden'>Leave</span>
            </span>
            <i className='icns icon-down sub-menu-ic  w-4 h-4 '></i>
          </Link>
          <div id="leave" data-toggle-menu-id="leave" className='collaps'>
            <ul className='nav flex flex-col sub-menu'>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Leave Status
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Leave Request
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Calender
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Summary
                  </a>
                </li>
            </ul>
          </div>
        </li>

        <li className='nav-item'>
          <Link to={"#aa"} data-toggle-id="attendance" data-toggle="collapse" onClick={() => toggleCollapse("attendance")}  aria-expanded="false" className="nav-link flex items-center justify-between whitespace-nowrap py-2 ">
            <span className='flex items-center'>
              <span className='icon-wrapper'>
                <i className='icns menu-ic icon-calender w-5 h-5 '></i>
              </span>
              <span className='menu-title hidden'>Attendance</span>
            </span>
            <i className='icns icon-down sub-menu-ic  w-4 h-4 '></i>
          </Link>
          <div id="attendance" data-toggle-menu-id="attendance" className='collaps'>
            <ul className='nav flex flex-col sub-menu'>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Daily Log
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Attendance Request
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Attendance Details
                  </a>
                </li>
                <li className='nav-item overflow-hidden !p-0'>
                  <a href="https://payday.gainhq.com/leave/status" className="nav-link flex items-center">
                    Summary
                  </a>
                </li>
            </ul>
          </div>
        </li>

      </ul>
    </nav>
  )
}

export default LeftBar