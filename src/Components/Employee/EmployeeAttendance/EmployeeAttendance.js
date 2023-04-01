import React, { useEffect, useReducer } from 'react'
import './EmployeeAttendance.scss'
import { Pie } from '@ant-design/plots';
import { pieChartConfiguration } from '../../../Configuration/ChartConfiguration';
import { employeeAttendanceTotal } from '../../../MockData/DashboardChartData';
import { employeeAttendanceSummaryData } from '../../../MockData/EmployeeData';
import { employeeAttendanceTableData } from '../../../MockData/EmployeeTableData';
import TableModel, { TableHeader } from '../../../Core/Models/Table';
import Table from '../../Table/Table';
import MonthFilter from '../../MonthFilter/MonthFilter';
import EmployeeSummaryCard from '../EmployeeSummaryCard/EmployeeSummaryCard';


const reducer = (state, action) => {
  switch (action.type) {
    case "TABLE":
      return {...state, ...{tableData: action.tableData}}
    default:
      return state;
  }
};

const buildBody = (data) => {
  return (data.map((x) => { return {...x,...{}} } ))
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
      case 'date':
        headerCol['columnKey'] = mappingObj[element]
        headerCol['order'] = 1;
        break;
      case 'punched_in':
        headerCol['columnKey'] = mappingObj[element]
        headerCol['order'] = 2;
        break;
      case 'geo_location':
        headerCol['columnKey'] = mappingObj[element];
        headerCol['order'] = 3;
        break;
      case 'punched_out':
        headerCol['columnKey'] =  mappingObj[element];
        headerCol['order'] = 4;
        break;  
      case 'out_geo_location':
        headerCol['columnKey'] = mappingObj[element];
        headerCol['order'] = 5;
        break; 
      case 'behaviour':
        headerCol['columnKey'] = mappingObj[element];
        headerCol['order'] = 6;
        break; 
      case 'total_hours':
        headerCol['columnKey'] = mappingObj[element];
        headerCol['order'] = 7;
        break;       
      case 'entry':
        headerCol['columnKey'] = mappingObj[element];
        headerCol['order'] = 8;
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


const EmployeeAttendance = () => {
  
  const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({})});

  
  
  const actionClick = (event) => {
    console.log(event)
  }


  
  useEffect(() => {
    let data = new TableModel(
      {
        responsive:  true,   
        tableBody: buildBody(employeeAttendanceTableData.data), 
        tableHeader: buildHeader(employeeAttendanceTableData.maping)
      }
    )
    dispatch({type: 'TABLE', tableData: data})

  }, [employeeAttendanceTableData.data])


  return (
    <>
      <div id='attendance-container' className='attendance-container'>
        <MonthFilter />
        <div className='flex flex-wrap justify-between max-sm:!pt-4 sm:!pt-6'>
          <div className='w-full lg:w-[calc(40%-0.5rem)] xl:w-[calc(30%-0.5rem)]'>
              <div style={{'height': '225px'}}>
                <Pie {...pieChartConfiguration(employeeAttendanceTotal, 'value', 'type', '', {colorField: 'type', legend: { layout: 'vertical', position: 'right' },color: ['#fc6510', '#e50404', '#00b48c', '#ee00ff']})} />
              </div>
          </div>
          <div className='w-full max-lg:pt-4 xl:w-[calc(70%-0.5rem)] lg:w-[calc(60%-0.5rem)] gap-4 xl:gap-6 flex flex-wrap'>
            {
              (employeeAttendanceSummaryData && employeeAttendanceSummaryData.length > 0) &&
                employeeAttendanceSummaryData.map((summary, index) => {
                  return ( <div key={`employee-summary-${index}`} className=' max-sm:w-full sm:w-[calc(50%-0.5rem)] xl:w-[calc(33.33%-1rem)] '>
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

export default EmployeeAttendance