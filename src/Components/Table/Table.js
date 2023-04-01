import React, { useEffect, useReducer } from 'react'
import Input from '../Form/Input'
import './Table.scss';

const reducer = (state, action) => {
    switch (action.type) {
      case "TABLE_HEADER":
        return {...state, ...{tHeader: action.tHeader}}
    case "TABLE_BODY":
        return {...state, ...{tBody: action.tBody}}  
    case "TABLE_SELECT_ALL":
        return {...state, ...{selectAll: action.selectAll}}      
      default:
        return state;
    }
  };
  

const Table = (props) => {
//    responsive, height, defaultSortKey, sortDirection, 
    const {tableBody, tableHeader, actionClick} = props;
    const [state, dispatch] = useReducer(reducer, {selectAll: false, tHeader: tableHeader || [], tBody: tableBody || []});

    useEffect(() => {
        dispatch({type: "TABLE_HEADER", tHeader: tableHeader?.sort((a, b) => (a.order > b.order) ? 1 : -1)});
        dispatch({type: "TABLE_BODY", tBody: tableBody })
        dispatch({type: "TABLE_SELECT_ALL", selectAll: false })
    }, [tableHeader, tableBody])

    const checkBoxAction = (event, data = 'all') => {
    if(data === 'all') {
        for (const item of state.tBody) {
            item.isChecked = event.target.checked;
        }
        dispatch({type: "TABLE_SELECT_ALL", selectAll: event.target.checked})
    } else {
        for (const item of state.tBody) {
            if (data.id === item.id) {
                item.isChecked = event.target.checked;
            }
            if (state.tBody.filter(x => x.isChecked === true).length === tableBody.length) {
                dispatch({type: "TABLE_SELECT_ALL", selectAll: event.target.checked})
            } else {
                dispatch({type: "TABLE_SELECT_ALL", selectAll: false})
            }
        }
    }

    
    dispatch({type: "TABLE_BODY", tBody: tableBody })   

  }


  useEffect(() => {
    document.addEventListener('click', function(event) {
        let activeDrp = document.querySelectorAll('[data-dropdown-active="true"]')[0];
        if (activeDrp) {
            var isClickInsideElement = activeDrp.contains(event.target);
            if (!isClickInsideElement) {
                activeDrp.firstChild.nextSibling.style.cssText = "display: none !important; position: absolute";;
            }
        }
        
    });
  }, [])


  const getOffset = ( el ) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

 
  


  const openAction = (event, row_index) => {
    const actionTdOffset = getOffset(document.getElementById("action_"+row_index))
    const tableElements = document.getElementsByClassName('open-table-dropdown');
    const innerHeight = window.innerHeight;
    for (const item of tableElements) {
        if (item.id !== `open_dropdown_${row_index}`) {
            item.style.cssText = "display: none; position: absolute";
            item.parentElement.dataset['dropdownActive'] = "false";
        } else {
            item.style.cssText = '';
            item.style.cssText = "display: block; position: absolute;right: 15px";
            item.parentElement.dataset['dropdownActive'] = "true";           
            if ((innerHeight - actionTdOffset.top) > 250 ) {
                item.classList.remove("dropdown-menu-down")
                item.style.cssText = "display: block; position: absolute;";
            } else {
                item.classList.add("dropdown-menu-down")
                item.style.cssText = `display: block; position: absolute;top: ${ Math.abs((((actionTdOffset.top)) - 270)) }px;right: 15px`;
            }
        }   
    }
  }

  const TableHeader = ({title, columnAlign, colspan, rowspan, sortable, columnShrink, columnVisibility, columnStickyPosition, columnWidth, columnKey }) => {

    return (
        <>
            <th colSpan={colspan} rowSpan={rowspan}  className={`flex-1  table-header ${columnStickyPosition ? 'sticky-'+columnStickyPosition : '' }`}>
                <div className={`flex items-center justify-${columnAlign} ${columnVisibility ? '': 'invisible' } `}>
                {
                    (() => {
                        switch (columnKey) {
                        case 'checkbox':
                            return (
                                <div style={{width: "47px"}}>
                                    <Input id={'select_all'} type="checkbox" name={'select_all'} label="" isShowLabel={false} checked={state.selectAll} onChange={(event) => checkBoxAction(event)}/>
                                </div>
                            );
                        default:
                            return  ( 
                                <div className={`${columnShrink ? 'shrink-0': 'shrink-1'}`} style={{width: columnWidth || 'max-content'}}>
                                    {title}
                                </div>
                            );
                        }
                    })()
                }
                   
                </div>
                
            </th>
        </>
    )
}


  return (
    <>
        <div className='overflow-auto w-full data-table-container'>
            {
                state.tBody && state.tBody.length > 0 &&
                    <table className='data-table w-full'>
                        <thead className='thead'>
                            <tr className=''>
                                {/* */}
                                
                                {
                                    state.tHeader &&
                                    state.tHeader.map((header, index) => {
                                        return (
                                            <TableHeader {...header}  key={`header_${index}`} />
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            
                            {
                                (state.tBody && state.tBody.length > 0) &&
                                state.tBody.map((bodyItem, bodyItemIndex) => {
                                    return(
                                        <tr className='' key={`body_${bodyItemIndex}`}>
                                            {   
                                                state.tHeader?.map((headerItem , headerIndex) => {
                                                    return(
                                                        // <>
                                                        (() => {
                                                            switch (headerItem.columnKey) {
                                                                case 'checkbox':
                                                                    return (
                                                                        <td className={`flex-1 table-data whitespace-nowrap  ${headerItem.columnStickyPosition ? 'sticky-'+headerItem.columnStickyPosition : '' }`}  key={`body_column_${bodyItemIndex}_${headerIndex}`} style={{width: "47px"}}>
                                                                            <Input id={`datatable-row-${bodyItemIndex}`} type="checkbox" name={'datatable_ids[]'} onChange={(event) => checkBoxAction(event, bodyItem)} label=""  isShowLabel={false}   checked={bodyItem.isChecked || false}/>
                                                                        </td>
                                                                    );
                                                                case 'actions':
                                                                    return (
                                                                        <td id={`action_${bodyItemIndex}`}  className={`flex-1 table-data whitespace-nowrap ${headerItem.columnStickyPosition ? 'sticky-'+headerItem.columnStickyPosition : '' }`}  key={`body_column_${bodyItemIndex}_${headerIndex}`}>
                                                                            <div className={`flex items-center  justify-${headerItem.columnAlign} ${headerItem.columnVisibility ? '': 'invisible' } `}>
                                                                                <div data-dropdown-active="false"  className='dropdown !static'>
                                                                                    <div onClick={(event) => openAction(event, bodyItemIndex)} className='flex items-center justify-center ripple cursor-pointer rounded-sm w-[30px] h-[30px]'>
                                                                                        <i className='icns icon-threedots w-[20px] h-[23px]'></i>
                                                                                    </div>
                                                                                    <div  aria-labelledby="languageDropdown"  style={{"display": "none"}} id={`open_dropdown_${bodyItemIndex}`} className="dropdown-menu bg-white z-30 open-table-dropdown dropdown-menu-right  profile-dropdown">
                                                                                        {
                                                                                            bodyItem.actions.map((action, actionIndex) => {
                                                                                                return (<a className="dropdown-item text-[14px]  !px-[1rem] !py-[1rem] flex items-center icon-default-hover" key={`table_action_${bodyItemIndex}_${actionIndex}`} href="#a" onClick={() => actionClick({id: action.id, bodyItem})} >{action.name}</a>)

                                                                                            }) 
                                                                                        }
                                                                                        {/* <a className="dropdown-item flex items-center icon-default-hover" href="/Employee"><i className="icns icon-notification w-6 h-6 mr-3"></i>Notification</a>
                                                                                        <a className="dropdown-item flex items-center icon-default-hover" href="/Employee"><i className="icns icon-logout w-6 h-6 mr-3"></i>Logout</a> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    );
                                                                default:
                                                                    return  ( 
                                                                        <td className={`flex-1 table-data whitespace-nowrap  ${headerItem.columnStickyPosition ? 'sticky-'+headerItem.columnStickyPosition : '' }`}  key={`body_column_${bodyItemIndex}_${headerIndex}`}>
                                                                            <div className={`flex items-center justify-${headerItem.columnAlign} ${headerItem.columnVisibility ? '': 'invisible' } `}>
                                                                                <div className={`${headerItem.columnShrink ? 'shrink-0': 'shrink-1'}`} style={{width: headerItem.columnWidth || 'max-content'}}>
                                                                                    {bodyItem[headerItem.columnKey]}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    );
                                                            }
                                                        })()
                                                    )
                                                })
                                            }
                                        </tr>           
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
            
            {
                (state.tBody && !state.tBody.length ) &&
                    <div className='flex flex-col items-center justify-center p-8'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/no_data.svg"} alt={'no data'}  className='max-w-[150px]'/>
                        <p className="mb-0 text-center">Nothing to show here</p>
                        <p className="mb-0 text-center text-secondary text-[12px]">Please add a new entity or manage the data table to see the content here</p>
                        <p className="mb-0 text-center text-secondary text-[12px]">Thank you</p>
                    </div>
            }
        </div>        
        
    </>        
  )
}

export default Table