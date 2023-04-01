import React from 'react'
import { Link } from 'react-router-dom'
import './TopBars.scss'

const TopBar = () => {
  const menuAction = () => {
      if (document.body.offsetWidth < 1024) {
        document.body.classList.add("sidebar-hover-only")
        document.body.classList.remove("sidebar-push-only")
        if (document.body.classList.contains("sidebar-mobile-only")){
          document.body.classList.remove("sidebar-mobile-only");
        } else {
          document.body.classList.add("sidebar-mobile-only");
        }
      } else {
        if (document.body.classList.contains("sidebar-hover-only")) {
          document.body.classList.remove("sidebar-hover-only")
          document.body.classList.add("sidebar-push-only");
        } else {
          document.body.classList.add("sidebar-hover-only")
          document.body.classList.remove("sidebar-push-only")
        }
      }
  };
  return (
    <>
      <nav className='navbar default-layout-navbar flex-wrap items-center justify-between fixed right-0 z-50 left-0  w-full top-0 flex flex-row'>
        <div className='navbar-menu-wrapper flex items-stretch px-6 text-9c9fa6'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex justify-start h-full'>
              <div className='navbar-toggler !pt-0 !pb-0 !pl-0 lg:!hidden block'>
                <img src={process.env.PUBLIC_URL + "/assets/images/footer-logo.png"} className="h-[24px] " alt='logo'/>
              </div>
              <div className='ripple rounded-md flex self-center' onClick={menuAction}>
                <i className='icon-menu icns w-6 h-6'></i>
              </div>
            </div>
            <div className='flex justify-center'></div>
            <div>
              <ul className='navbar-nav mb-0 pl-0 list-none  navbar-nav-right ml-auto flex-row	items-center flex '>
                <li className='nav-item dropdown  h-[70px] navbar-toggler '>
                  <div className='ripple rounded-md '>
                    <a  href='#language' data-toggle="dropdown" aria-expanded="false" className="flex text-primary items-center nav-link dropdown-toggle">
                      EN
                    </a>
                  </div>
                  <div aria-labelledby="languageDropdown" className="dropdown-menu dropdown-menu-right navbar-dropdown language-dropdown">
                      <a href="#en" className="dropdown-item">
                          <div className="flex items-center justify-center">
                              <h6 className="mb-0 font-weight-normal">English</h6>
                          </div>
                      </a>
                    </div>
                </li>
                <li className='nav-item  h-[70px] navbar-toggler'>
                  <div className='ripple rounded-md '>
                    <i className='icon-notification icon-default-filter icns w-6 h-6'></i>
                  </div>
                </li>
                <span className='topbar-divider'></span>
                <li className='nav-item dropdown !pr-0 h-[70px] navbar-toggler '>
                  <div className='ripple rounded-md '>
                    <a href='#profile' data-toggle="dropdown" aria-expanded="false" className="flex text-primary items-center nav-link dropdown-toggle">
                      <div className='nav-profile-text hidden sm:block'>
                        <p className='mb-0 text-black text-right '>
                          <span className='font-size-default'>
                            Dr. Banner 
                          </span>
                          <br/>
                          <span className='text-secondary text-sm block mt-1'>
                            Employee
                          </span>
                        </p>
                      </div>
                      <div className='relative'>
                        <img src="https://payday.gainhq.com/images/avatar.png" alt="avatar" className="rounded-circle rounded-full w-[40px] h-[40px]"/>
                      </div>
                    </a>
                  </div>
                  <div aria-labelledby="languageDropdown" id='profile' className="dropdown-menu   dropdown-menu-right navbar-dropdown profile-dropdown">
                    <div className='dropdown-item profile !pt-0 !pb-0 cursor-default flex items-center'>
                      <div className='relative'>
                        <img src="https://payday.gainhq.com/images/avatar.png" alt="avatar" className="rounded-circle rounded-full w-[50px] h-[50px]"/>
                      </div>
                      <div className='nav-profile-text profile-text ml-2'>
                        <p className="my-0 font-size-default text-black">Dr. Banner</p>
                        <span className='text-secondary text-sm block mt-1'>
                            Employee
                          </span>
                      </div>
                    </div>
                    <div className='dropdown-divider'>

                    </div>
                      <Link to={"#"} className="dropdown-item flex items-center icon-default-hover">
                        <i className='icns icon-my-profile w-6 h-6 mr-3'></i>
                        My profile
                      </Link>
                      <Link to={"#"} className="dropdown-item flex items-center icon-default-hover">
                        <i className='icns icon-notification w-6 h-6 mr-3'></i>
                        Notification
                      </Link>
                      <Link to={"#"} className="dropdown-item flex items-center icon-default-hover">
                        <i className='icns icon-logout w-6 h-6 mr-3'></i>
                        Logout                      
                      </Link>
                      {/* <a href="#" className="dropdown-item">
                          <div className="flex items-center justify-center">
                              <h6 className="mb-0 font-weight-normal">English</h6>
                          </div>
                      </a> */}
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopBar