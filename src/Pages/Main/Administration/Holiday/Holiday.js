import React, { useEffect, useReducer } from 'react'
import Card from '../../../../Components/Card/Card';
import Button from '../../../../Components/Form/Button';
import TableModel, { TableHeader } from '../../../../Core/Models/Table';
import Status from '../../../../Components/Status/Status';
import Table from '../../../../Components/Table/Table';
import { HolidayTableData } from '../../../../MockData/AdministrationTableData';
import './Holiday.scss'
import DisplayType from '../../../../Components/DisplayType/DisplayType';
// import moment from 'moment';
import CalenderInline from '../../../../Components/CalenderInline/CalenderInline';

const reducer = (state, action) => {
    switch (action.type) {
        case "TABLE":
          return {...state, ...{tableData: action.tableData}}
        case "CALENDER_DATA":
          console.log(action.calenderData)
          return {...state, ...{calenderData: action.calenderData}}  
        case "VIEW_TYPE":
          return {...state, ...{viewType: action.viewType}}    
        default:
        return state;
    }
};
const Holiday = ({title}) => {

    const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({}), calenderData: {}, viewType: 'table'});

    useEffect(() => {
      let data = new TableModel(
        {
          responsive:  true,   
          tableBody: buildBody(HolidayTableData.data), 
          tableHeader: buildHeader(HolidayTableData.maping)
        }
      )
      dispatch({type: 'TABLE', tableData: data})
      let result = HolidayTableData.data.reduce(function (r, a) {
          r[a.date] = r[a.date] || [];
          r[a.date].push(a);
          return r;
      }, Object.create(null));
     dispatch({type: 'CALENDER_DATA', calenderData: result})
  
    }, [HolidayTableData.data])
  
    const buildBody = (data) => {
      return (data.map((x) => { return {...x,...{ statusColumn: <Status status={x.status}/>}} } ))
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
            case 'name':
                headerCol['columnKey'] = mappingObj[element];  
                headerCol['order'] = 1;
                break;
            case 'type':
                headerCol['columnKey'] = mappingObj[element];  
                headerCol['order'] = 3;
                break;    
            case 'description':
                headerCol['columnKey'] = mappingObj[element];  
                headerCol['order'] = 4;
                break;   
            case 'date':
                headerCol['columnKey'] = mappingObj[element];
                headerCol['order'] = 2;
                break;
            default:
                headerCol['order'] = 10;
                headerCol['columnKey'] = mappingObj[element];
                break;
        }
       
        tableHeaders.push(headerCol)
      }
      return tableHeaders;
    }
  
  
    const actionClick = (event) => {
      console.log(event)
    }
  
    const filterItems = (event, type) => {
  
    }
    
    
  return (
    <>
    <section id='workshift' className='py-4'>
        <div className='flex max-sm:block justify-between mb-4 '>
            <div className='flex w-full justify-between '>
                <h4 className='main-title'>{title}</h4>
            </div>
            <div className='flex flex-wrap gap-4 '>
                <Button classes={'min-w-[150px] shrink-0'} btnType={'primary'}>Add Holiday</Button>
            </div>
        </div>
        <div className='filter-container gap-4 w-full flex flex-wrap justify-end mb-4 '>
            <DisplayType changeView={(e) => dispatch({type: 'VIEW_TYPE', viewType: e})}/>
        </div>
        <div>
            <Card classes='!position'>
                {
                state.tableData &&  state.viewType === 'table' &&
                <>
                    <Table actionClick={actionClick} {...state.tableData} />
                </>
                
                }

                {
                  state.viewType === 'calender' && 
                  <>
                    <CalenderInline eventList={state.calenderData} />
                  </>
                }
            </Card>
        </div>
    </section>
</>
  )
}

export default Holiday