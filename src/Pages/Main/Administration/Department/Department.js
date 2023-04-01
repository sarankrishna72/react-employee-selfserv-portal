import React, { useEffect, useReducer } from 'react'
import SearchBox from '../../../../Components/SearchBox/SearchBox';
import Card from '../../../../Components/Card/Card';
import Button from '../../../../Components/Form/Button';
import TableModel, { TableHeader } from '../../../../Core/Models/Table';
import Status from '../../../../Components/Status/Status';
import Table from '../../../../Components/Table/Table';
import './Department.scss'
import { DepartmentTableData } from '../../../../MockData/AdministrationTableData';
import Filter from '../../../../Components/Filter/Filter';
const reducer = (state, action) => {
    switch (action.type) {
        case "TABLE":
        return {...state, ...{tableData: action.tableData}}
        default:
        return state;
    }
};
  
const DepartmentList = ({title}) => {
  const [state, dispatch] = useReducer(reducer, {tableData: new TableModel({})});

  useEffect(() => {
    let data = new TableModel(
      {
        responsive:  true,   
        tableBody: buildBody(DepartmentTableData.data), 
        tableHeader: buildHeader(DepartmentTableData.maping)
      }
    )
    dispatch({type: 'TABLE', tableData: data})

  }, [DepartmentTableData.data])

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
        case 'manager':
            headerCol['columnKey'] = mappingObj[element];  
            headerCol['order'] = 2;
            break;    
        case 'description':
            headerCol['columnKey'] = mappingObj[element];  
            headerCol['order'] = 3;
            break;   
        case 'created_at':
            headerCol['columnKey'] = mappingObj[element];
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
                    <Button classes={'min-w-[150px] shrink-0'} btnType={'primary'}>Add Department</Button>
                </div>
            </div>
            <div className='filter-container gap-4 w-full flex flex-wrap justify-between mb-4 '>
              <div className='flex max-md:w-full md:!w-2/4 md:max-lg:flex-1 flex-wrap'>
                <div className='max-lg:w-1/2'>
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

export default DepartmentList