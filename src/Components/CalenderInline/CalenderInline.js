import React , { useEffect, useState } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import './CalenderInline.scss'

const CalenderInline = ({ eventList = {} , monthDateSelect}) => {  
  const [date, setDate] = useState(moment())
  const [cells, setCells] = useState('')
  const today = moment();


  useEffect(() => {
    let lastDateOfMonth = moment(date).endOf('month') //getting last date of a month
    let firstDayOfMonth =  moment(date).startOf('month').day(); //getting first date of a month
    let previousMonth = moment(date).subtract(1,'months').endOf('month') //getting previous month end date
    let c = '';
    let d = '';
   
    for (let index = firstDayOfMonth; index > 0; index--) {
        d = moment(new Date(moment(date).subtract(1,'months').year(), moment(date).subtract(1,'months').month(), previousMonth.date() - index + 1)).format("YYYY-MM-DD");
        let events = ``
        let eventData = getDateEvent(d)
        if (eventData && eventData.length > 0) {
            events = `<div class="event-container flex flex-col gap-1">`;
            for (const item of eventData) {
                events += `<div title="${item.name}" class="calander-event-item ripple text-[10px] max-md:h-[5px] cursor-pointer text-white p-[2px] pr-[5px] pl-[5px] rounded-md " data-id="${item.id}">${item.name}</div>`
          }
            events += `</div>`
        }
        c += `  <div data-date="${d}" class='calander-day min-h-[50px] sm:h-[100px] lg:h-[150px] text-[12px] sm:text-[14px] w-[14.285714285%] max-sm:!p-1 p-2 '>
                    <div class="calender-previous-month">
                        ${previousMonth.date() - index + 1}
                        ${events}
                    </div>
                    
                </div>`
    }
    for (let index = 1; index <= lastDateOfMonth.date(); index++) {
        d = moment(new Date(lastDateOfMonth.year(), lastDateOfMonth.month(), index)).format("YYYY-MM-DD");
        let events = ``
        let eventData = getDateEvent(d)
        if (eventData && eventData.length > 0) {
            events = `<div class="event-container flex flex-col gap-1">`;
            for (const item of eventData) {
                events += `<div title="${item.name}" class="calander-event-item ripple text-[10px] max-md:h-[5px] cursor-pointer text-white p-[2px] pr-[5px] pl-[5px] rounded-md " data-id="${item.id}">${item.name}</div>`
          }
            events += `</div>`
        }
        c += `<div data-date="${d}" class='calander-day min-h-[50px] sm:h-[100px] lg:h-[150px] text-[12px] sm:text-[14px] w-[14.285714285%] max-sm:!p-1 p-2 ${(today.date() === index && today.month() === lastDateOfMonth.month() && today.year() === lastDateOfMonth.year()) ? 'calender-today': '' }'>
                ${index}
                ${events}
            </div>`
    }

    for (let index = lastDateOfMonth.day(); index < 6 ; index++) {
        d = moment(new Date(moment(date).add(1,'months').year(), moment(date).add(1,'months').month(), index - lastDateOfMonth.day() + 1)).format("YYYY-MM-DD");
        let events = ``
        let eventData = getDateEvent(d)
        if (eventData && eventData.length > 0) {
            events = `<div class="event-container flex flex-col gap-1">`;
            for (const item of eventData) {
                events += `<div title="${item.name}" class="calander-event-item ripple text-[10px] max-md:h-[5px] cursor-pointer text-white p-[2px] pr-[5px] pl-[5px] rounded-md " data-id="${item.id}">${item.name}</div>`
          }
            events += `</div>`
        }
        c += `<div data-date="${d}" class='calander-day min-h-[50px] sm:h-[100px] lg:h-[150px] text-[12px] sm:text-[14px] w-[14.285714285%] max-sm:!p-1 p-2 calender-previous-month'>
            ${index - lastDateOfMonth.day() + 1}
            ${events}
        </div>`
    }
    setCells(c)

    setTimeout(() => {
        let listners =  document.getElementsByClassName('calander-day');
        let eventListners = document.getElementsByClassName('calander-event-item');
        listners = [...listners, ...eventListners]
        for (var i = 0; i < listners.length; i++) {
            listners[i].addEventListener('click', clickFunction, false);
        }
    }, 100)
    
  }, [date, eventList])


  const getDateEvent = (date) => {
    for (const d of Object.keys(eventList)) {
        if ((moment(date).format("X") === (moment(d).format("X")))) {
            return eventList[d];
        }
        
    } 
  }

  const clickFunction = (e) => {
    e.stopPropagation();
    if (monthDateSelect) {
        monthDateSelect(e.target.dataset)
    }
  }


  const changeDate = (action) => {
    if (action === -1) {
        let v = moment(date).subtract(1,'months').endOf('month')
        setDate(v)
    } else if (action === +1) {
        let v = moment(date).add(1,'months').endOf('month')
        setDate(v)
    }
  } 

  
  
  return (
    <>
        <div className='p-[10px] flex w-full flex-col '>
            <div className='rounded-md flex w-full justify-center items-center relative'>
                <div className='inline-flex rounded-md  calender-button-group absolute left-0'>
                    <button className='ripple max-sm:!p-1  p-2 flex items-center justify-center' onClick={() => changeDate(-1)}>
                        <i className='icns icon-left-arrow max-sm:w-4 max-sm:h-4 w-6 h-6 icon-default-filter'></i>
                    </button>
                    <div className='calender-action-divider '></div>
                    <button className='ripple max-sm:!p-1  p-2 flex items-center justify-center' onClick={() => changeDate(+1)}>
                        <i className='icns icon-right-arrow max-sm:w-4 max-sm:h-4 w-6 h-6 icon-default-filter'></i>
                    </button>
                </div>
                <div className='calender-month flex items-center p-2 text-[14px] sm:min-h-[42px]'>
                    <Moment format={'MMMM, YYYY'} date={date}></Moment>
                </div>
            </div>
            <div className='pt-4 w-full'>
                <div className='calender-weekends flex '>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                       <span className='max-sm:block hidden'>Su</span> 
                       <span className='max-sm:hidden block'>Sun</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>Mo</span> 
                        <span className='max-sm:hidden block'>Mon</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>Tu</span> 
                       <span className='max-sm:hidden block'>Tue</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>We</span> 
                       <span className='max-sm:hidden block'>Wed</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>Th</span> 
                        <span className='max-sm:hidden block'>Thu</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>Fr</span> 
                        <span className='max-sm:hidden block'>Fri</span> 
                    </div>
                    <div className='day-name !border-b-0 text-[12px] sm:text-[14px] text-center w-[14.285714285%] max-sm:!p-1 p-2'>
                        <span className='max-sm:block hidden'>Sa</span> 
                        <span className='max-sm:hidden block'>Sat</span> 
                    </div>
                </div>
                <div className='calander-days flex flex-wrap' dangerouslySetInnerHTML={{__html: cells} }></div>
            </div>
        </div>
    </>
  )
}

export default CalenderInline