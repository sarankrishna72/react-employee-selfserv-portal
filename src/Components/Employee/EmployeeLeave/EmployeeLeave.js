import React, { useEffect, useReducer } from 'react'
import './EmployeeLeave.scss'

import { employeeLeaveTableData } from '../../../MockData/EmployeeTableData';
import EmployeeSummaryCard from '../EmployeeSummaryCard/EmployeeSummaryCard';
import TableModel, { TableHeader } from '../../../Core/Models/Table';
import Status from '../../Status/Status';
import Table from '../../Table/Table';
import MonthFilter from '../../MonthFilter/MonthFilter';
import { employeeLeaveummaryData } from '../../../MockData/EmployeeData';

const reducer = (state, action) => {
    switch (action.type) {
      case "TABLE":
        return {...state, ...{tableData: action.tableData}}
      default:
        return state;
    }
  };
  

  const buildBody = (data) => {
    return (data.map((x) => { return {...x,...{status_new: <Status status={x.status} />}} } ))
  }
  
  const buildHeader = (mappingObj) => {
    let tableHeaders = [];
    for (let index = 0; index < Object.keys(mappingObj).length; index++) {
      const element = Object.keys(mappingObj)[index];
      let headerCol;
      headerCol = new TableHeader(
        {  
          title: element,
          classes: '', 
          columnAlign: mappingObj[element] === 'actions' ? 'center': 'left', 
          columnStickyPosition: '', 
          columnShrink: true,
          colspan: 1,
          rowspan: 1,
          sortable: false,
          columnVisibility: true,
        }
      )
  
      switch (mappingObj[element]) {
        case 'leave_date':
          headerCol['columnKey'] = mappingObj[element]
          headerCol['order'] = 1;
          break;
        case 'duration':
          headerCol['columnKey'] = mappingObj[element]
          headerCol['order'] = 2;
          break;
        case 'leave_type':
          headerCol['columnKey'] = mappingObj[element];
          headerCol['order'] = 3;
          break;
        case 'attachments':
          headerCol['columnKey'] =  mappingObj[element];
          headerCol['order'] = 4;
          break;  
        case 'status':
          headerCol['columnKey'] = 'status_new';
          headerCol['order'] = 5;
          break; 
        default:
          headerCol['order'] = 9;
          headerCol['columnKey'] = mappingObj[element];
          break;
      }
     
      tableHeaders.push(headerCol)
    }
    return tableHeaders;
  }
  

const EmployeeLeave = () => {
    
    const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({})});

  
  
    const actionClick = (event) => {
      console.log(event)
    }
  

    
    useEffect(() => {
      let data = new TableModel(
        {
          responsive:  true,   
          tableBody: buildBody(employeeLeaveTableData.data), 
          tableHeader: buildHeader(employeeLeaveTableData.maping)
        }
      )
      dispatch({type: 'TABLE', tableData: data})
  
    }, [employeeLeaveTableData.data])

  return (
    <>
        <div id='leave-container' className='leave-container'>
            <MonthFilter />
        <div className='flex flex-wrap justify-between max-sm:!pt-4 sm:!pt-6'>
         
          <div className='w-full flex flex-wrap lg:gap-6 gap-4'>
          {
              (employeeLeaveummaryData && employeeLeaveummaryData.length > 0) &&
                employeeLeaveummaryData.map((summary, index) => {
                  return ( <div key={`employee-summary-${index}`} className=' max-sm:w-full  sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] '>
                    <EmployeeSummaryCard {...summary} />
                  </div>)
                })
                
            }
           
          </div>
        </div>
        <div className='pt-6'>
            {
                state.tableData  &&
                <>
                <Table actionClick={actionClick} {...state.tableData} />
                </>
            
            }
        </div>
      </div>
    </>
  )
}

export default EmployeeLeave