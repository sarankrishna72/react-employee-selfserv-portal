import React, { useEffect, useReducer } from 'react'
import SearchBox from '../../../../Components/SearchBox/SearchBox';
import Card from '../../../../Components/Card/Card';
import Button from '../../../../Components/Form/Button';
import TableModel, { TableHeader } from '../../../../Core/Models/Table';
import { employeeDesignationTableData } from '../../../../MockData/EmployeeTableData';
import Status from '../../../../Components/Status/Status';
import Table from '../../../../Components/Table/Table'; 
import Filter from '../../../../Components/Filter/Filter';

const reducer = (state, action) => {
  switch (action.type) {
    case "TABLE":
      return {...state, ...{tableData: action.tableData}}
    default:
      return state;
  }
};

const EmployeeDesignation = ({title}) => {
  const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({})});

  useEffect(() => {
    let data = new TableModel(
      {
        responsive:  true,   
        tableBody: buildBody(employeeDesignationTableData.data), 
        tableHeader: buildHeader(employeeDesignationTableData.maping)
      }
    )
    dispatch({type: 'TABLE', tableData: data})

  }, [employeeDesignationTableData.data])

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
        case 'description':
            headerCol['columnKey'] = mappingObj[element];  
            headerCol['order'] = 2;
            break;
        case 'employees_count':
            headerCol['columnKey'] = mappingObj[element];  
            headerCol['order'] = 3;
            break;      
        case 'status':
            headerCol['columnKey'] = 'statusColumn';
            headerCol['order'] = 4;
            break; 
        default:
            headerCol['order'] = 6;
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
        <section id='dashboard' className='py-4'>
            <div className='flex max-sm:block justify-between mb-4 '>
                <div className='flex w-full justify-between '>
                    <h4 className='main-title'>{title}</h4>
                </div>
                <div className='flex flex-wrap gap-4 '>
                    <Button classes={'min-w-[150px] shrink-0'} btnType={'primary'}>Add Designation</Button>
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
                <SearchBox placeholder={'Search designation'} classes={'max-md:min-w-full '} />
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

export default EmployeeDesignation