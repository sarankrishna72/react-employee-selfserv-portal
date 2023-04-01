import React, { useEffect, useState } from 'react'
import './VerticalTab.scss'
import Card, { CardBody, CardHeader } from '../Card/Card';

export const VertTabItemHeader = ({title}) => {
    return (    
        <CardHeader classes='!p-0'>
            <div className={`flex justify-between items-center h-[90px] max-lg:h-[65px] max-sm:!px-4 sm:!px-6 xl:!px-8`}>
                <h5 className='capitalize text-[1.25rem] leading-[1.25rem]'>{title}</h5>
            </div>
        </CardHeader>
    )
}



export const VerticalTabItem = ({children, title,  target, ...props}) => {
   return ( 
        <div id={target} className='hidden' style={{'height': "100%"}} {...props} data-tab-target={target}>
            <Card classes='h-full'>
                {
                    title &&
                        <VertTabItemHeader title={title}/>
                }
                <CardBody classes='sm:!pb-4 max-sm:!p-4 sm:!p-6 xl:!p-8 '>
                    {children}
                </CardBody>
               
            </Card>
        </div>
    )
}

const VerticalTab = ({tabIcon = "", tabList = [], tabChange, children}) => {
    const [activeTab, setActiveTab] = useState('')
    useEffect(() => {
        if (window.location.hash) {
            setActiveTab(window.location.hash.replace("#", ''))
            
        } else {
            setActiveTab(tabList[0].link)
        } 
        
    }, [tabList])
 
    useEffect(()=> {
        if (activeTab) {
            setTimeout(()=> {
                const tabs = document.querySelectorAll("[data-tab-target]");
                if (tabs.length > 0) {
                    for (const tab of tabs) {
                        tab.className = '';
                        tabChange(activeTab)
                        if (tab.dataset.tabTarget === activeTab) {
                            tab.classList.add("block");
                        } else {
                            tab.classList.add("hidden");
                        }
                    }
                }
            },100)
        }
        let menu =  document.getElementById('vertical-tab-menu-container')
        if (menu.dataset.tabMenuPopup === 'block') {
            menu.dataset.tabMenuPopup = 'hidden';
        }
  }, [activeTab]) 


    const changeTab = (tabLink) => {
        if (activeTab !== tabLink) {
            setActiveTab(tabLink);
            tabChange(tabLink)
        }
    }

    const menuOpen = () => {
        let menu =  document.getElementById('vertical-tab-menu-container')
        if (menu.dataset.tabMenuPopup === 'hidden') {
            menu.dataset.tabMenuPopup = 'block';
        } else {
            menu.dataset.tabMenuPopup = 'hidden';
        }
    }
    
  return (
    <>
        <div className='w-full flex flex-wrap mt-4'>
            <div id='vertical-tab-menu-container' data-tab-menu-popup="hidden" className='w-full vertical-tab-menu md:w-4/12 lg:w-3/12 2xl:w-2/12 md:pr-2 max-md:mb-4'>
                <div className='h-full'>
                    <div className='h-full'>
                        <Card classes='tab-menu vertical-tab relative h-full overflow-y-auto overflow-x-hidden'>
                            <CardBody classes='!p-0'>
                                <div className='sticky top-0 z-10'>
                                    <div className='header-icon  max-lg:!h-[65px] flex justify-center  relative'>
                                        <div className='tab-icon flex justify-center items-center absolute '>
                                            <i className={`icns w-[30px] icon-default-filter h-[30px] ${tabIcon}`}></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='max-sm:!py-4 sm:!py-6 xl:!py-8'>
                                    <div role={'tablist'} className='flex flex-wrap flex-col'> 
                                        {
                                            tabList.map((x) => {
                                                return(
                                                    <a key={x.link} data-tab-href={x.link} onClick={()=> changeTab(x.link)} data-tab-id={x.link} className={`capitalize max-sm:!px-4 rounded sm:!px-6 xl:!px-8 ripple tab-item-link ${activeTab == x.link ? 'active-tab': '' } flex justify-between mt-1 mb-1 pt-2 pb-2`} href={`#${x.link}`}>
                                                        <span className='whitespace-nowrap'>{x.name}</span>
                                                        <i className='icns icon-right-arrow w-[24px] h-[20px]'></i>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-8/12 lg:w-9/12 2xl:w-10/12 md:pl-2 relative'>
                <div className='absolute top-4 md:hidden right-4 z-20 h-7 w-7' onClick={menuOpen}>
                    <div className='w-full h-full ripple flex items-center rounded-md justify-center '>
                        <i className='icns icon-menu-line cursor-pointer h-4 w-4 icon-default-filter'></i>
                    </div>
                </div>
                
                {children}
            </div>
        </div>
    </>
  )
}

export default VerticalTab