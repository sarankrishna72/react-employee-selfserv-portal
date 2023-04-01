import React, { useEffect, useReducer } from 'react'
import Table from '../../../../Components/Table/Table'
import './EmployeeList.scss'
import Card from '../../../../Components/Card/Card';
import { employeeTableData } from '../../../../MockData/EmployeeTableData';
import TableModel, { TableHeader } from '../../../../Core/Models/Table';
import Select from '../../../../Components/Form/Select';
import SearchBox from '../../../../Components/SearchBox/SearchBox';
import Filter from '../../../../Components/Filter/Filter';
import Status from '../../../../Components/Status/Status';
import EmployeeNameColumn from '../../../../Components/Employee/EmployeeNameColumn/EmployeeNameColumn';


const reducer = (state, action) => {
  switch (action.type) {
    case "TABLE":
      return {...state, ...{tableData: action.tableData}}
    default:
      return state;
  }
};

const EmployeeList = ({title}) => {
  const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({})});
  useEffect(() => {
    let data = new TableModel(
      {
        responsive:  true,   
        tableBody: buildBody(employeeTableData.data), 
        tableHeader: buildHeader(employeeTableData.maping)
      }
    )
    dispatch({type: 'TABLE', tableData: data})

  }, [employeeTableData.data])

  const onSelectChange = (event) => {
    for (let item of employeeTableData.data) {
      if (item.id === event.target.dataset.id) {
        item.designation = event.target.value
      }
    }

    let data = new TableModel(
      {
        responsive:  true,   
        tableBody: buildBody(employeeTableData.data), 
        tableHeader: buildHeader(employeeTableData.maping)
      }
    )
    dispatch({type: 'TABLE', tableData: data})
  }


  const buildBody = (data) => {
    return (data.map((x) => { return {...x,...{ statusColumn: <Status status={x.status}/>, designationSelect: <Select onChange={onSelectChange} id={`employee-select-${x.id}`} data-id={x.id} name={`employee-select-${x.id} `} value={x.designation} classes={'!h-[35px] !py-[5px] !w-[250px] max-w-[260px]'} options={[["senior_ui_developer", "Senior UI Software Developer"], ["senior_project_manager", "Senior Project Manager"], ["hr_manager", "Hr Manager"],["team_lead", "Team Lead"]]}  /> ,columnLink:  `https://demo.worksuite.biz/account/employees/${x.id}`, customName: <EmployeeNameColumn name={x.name} profilePic={x.image} designation={x.designation} /> }} } ))
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
          headerCol['columnKey'] = 'customName'
          headerCol['order'] = 2;
          headerCol['columnStickyPosition'] = 'left'
          break;
        case 'id':
          headerCol['columnKey'] = mappingObj[element];
          headerCol['order'] = 1;
          break;
        case 'email':
          headerCol['columnKey'] = mappingObj[element];
          headerCol['order'] = 3;
          break;
        case 'designation':
          headerCol['columnKey'] = 'designationSelect';
          headerCol['order'] = 4;
          break;  
        case 'status':
          headerCol['columnKey'] = 'statusColumn';
          headerCol['order'] = 5;
          break; 
        default:
          headerCol['order'] = 6;
          headerCol['columnKey'] = mappingObj[element];
          break;
      }
     
      tableHeaders.push(headerCol)
    }
    tableHeaders.unshift(new TableHeader(
      {  
        title: '',
        classes: '',
        columnKey: 'checkbox',
        columnAlign: 'left', 
        columnStickyPosition: '', 
        columnShrink: true,
        colspan: 1,
        rowspan: 1,
        order: 0,
        sortable: false,
        columnVisibility: true,
      }
    ))
    return tableHeaders;
  }
  
  const actionClick = (event) => {
    console.log(event)
  }

  const filterItems = (event, id) => {
    console.log('====================================');
    console.log(event, id);
    console.log('====================================');
    
  }


  return (
    <>
    <section id='dashboard' className='py-4'>
        <div className='flex max-sm:block justify-between mb-4 '>
          <div className='flex justify-between '>
            <h4 className='main-title'>{title}</h4>
          </div>
        </div>
        <div className='filter-container gap-4 w-full flex flex-wrap justify-between mb-4 '>
          <div className='flex max-md:w-full md:!w-2/4 md:max-lg:flex-1 flex-wrap'>
            <div className='max-lg:w-1/2 pr-2'>
              <Filter classes={'lg:!max-w-[200px] lg:w-[250px] max-md:w-full'} selectedItems={(event) => filterItems(event, 'designation')} placeholder={'All Designation'} options={[['senior ui software developer', 'Senior UI Software Developer'],['senior project manager', 'Senior Project Manager'], ['team lead', 'Team Lead'], ['hr manager', 'HR Manager']]} />
            </div>
            <div className='max-lg:w-1/2 pl-2'>
              <Filter classes={'lg:!max-w-[200px] lg:w-[250px] max-sm:w-full'} selectedItems={(event) => filterItems(event, 'status')} placeholder={'All Status'} options={[['active', 'Active'],['resigned', 'Resigned'], ['probation', 'Probation'], ['contract', 'Contract']]} />
            </div>
          </div>
          <SearchBox placeholder={'Search name,email or employee id'} classes={'max-md:min-w-full '} />
        </div>
        <div>
            <Card classes='!position'>
                {
                  state.tableData  &&
                  <>
                    <Table actionClick={actionClick} {...state.tableData} />
                  </>
                  
                }
            </Card>
        </div>
      </section>
    </>
  )
}

export default EmployeeList