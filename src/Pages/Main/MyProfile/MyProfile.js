import React, { useState } from 'react'
import Badge from '../../../Components/Badge/Badge'
import Card, { CardBody } from '../../../Components/Card/Card'
import VerticalTab, { VerticalTabItem } from '../../../Components/VerticalTab/VerticalTab'
import { ProfileTabList } from '../../../Configuration/TabConfiguration'
import './MyProfile.scss'
import Button from '../../../Components/Form/Button';
import Select from '../../../Components/Form/Select';
import Input from '../../../Components/Form/Input';
import { changePasswordnputs, myProfileInputs } from '../../../Configuration/FormInputConfiguration';
import PersonalDetails from '../../../Components/PersonalDetails/PersonalDetails';


const ChangePassword = () => {
    const [formData, setFormData] = useState({
        old_password: '',
        new_passwor: '',
        confirm_password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:  event.target.type === 'checkbox'  ? event.target.checked : event.target.value,
        });
    } 
    return(
        <>
            <form>
                {
                    changePasswordnputs.map((inputItem, index) => 
                        { 
                            return(
                                <div className='flex flex-wrap mb-[1em] items-center' key={"form"+index}>
                                    <div className='w-full max-md:mb-1 md:w-4/12 lg:w-3/12'>
                                        <label>{inputItem.label}</label>
                                    </div>
                                    <div className='w-full md:w-8/12 lg:w-9/12'>
                                        {
                                            (() => {
                                                switch (inputItem.type) {
                                                case 'dropdown':
                                                    return <Select {...inputItem} value={formData[inputItem.name]} onChange={handleChange}/>;
                                                default:
                                                    return <Input {...inputItem} value={formData[inputItem.name]} onChange={handleChange}/>;
                                                }
                                            })()
                                        }
                                    </div>
                                    
                                </div>
                            )
                            
                        }
                    )
                }
                <div className='flex gap-3'>
                    <Button type={'submit'} classes={'min-w-[100px]'} btnType={'primary'}>Save</Button>
                </div>
            </form>
        </>
    )
}


export const PersonalDetailsTab = () => {
    return(
        <PersonalDetails profileInputs={myProfileInputs}></PersonalDetails>
    )
}

const MyProfile = ({title}) => {
  
  return (
    <>
        <section id='my-profile' className='py-4'>
            <div className='flex max-sm:block justify-between mb-4 '>
                <div className='flex justify-between'>
                    <h4 className='main-title'>{title}</h4>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full'>
                    <Card>
                        <CardBody classes='max-sm:!p-4 sm:!p-6 xl:!p-8'>
                            <div className='flex flex-wrap'>
                                <div className='user-profile-details w-full lg:w-5/12  xl:pr-8 lg:pr-6'>
                                    <div className='lg:flex max-lg:text-center w-full'>
                                        <div className='lg:mr-6 max-lg:pb-4 flex justify-center'>
                                            <div className=' h-[130px] w-[130px] rounded-md overflow-hidden'>
                                                <img src='https://payday.gainhq.com/images/avatar.png' className='h-[130px] w-[130px]' alt='profile' />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-[1.5rem]'>Jhon Doe</h4>
                                            <Badge badgeType={'success'}>Active</Badge>
                                            <p className='text-secondary mt-2 mb-0'>admin@demo.com</p>
                                            <p className='text-primary'>App Admin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full  lg:w-7/12 flex justify-between  flex-wrap lg:pl-6 xl:pl-8 max-lg:pt-4 max-lg:mt-4 max-lg:border-l-0 lg:border-t-0 border-top border-left'>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className='flex flex-wrap lg:flex-col justify-between h-full'>
                                            <div className='w-1/2 lg:w-full max-lg:mb-3 flex items-center'>
                                                <span className="material-symbols-outlined max-sm:text-[25px] text-[35px] text-primary">call</span>
                                                {/* <i className='icns icon-phone max-sm:w-[25px] sm:w-[32px] icon-default-filter max-sm:h-[25px] sm:h-[32px] mr-2'></i> */}
                                                <div className='flex-1 ml-2'>
                                                    <p className='text-secondary max-sm:text-[13px]'>Contact:</p>
                                                    <p className='mb-0 max-sm:text-[13px]'>Not added yet</p>
                                                </div>
                                            </div>
                                            <div className='w-1/2 lg:w-full flex max-lg:mb-3  items-center'>
                                                <span className="material-symbols-outlined max-sm:text-[25px] text-[35px] text-primary">calendar_today</span>
                                                {/* <i className='icns icon-calender max-sm:w-[25px] sm:w-[32px] icon-default-filter max-sm:h-[25px] sm:h-[32px] mr-2'></i> */}
                                                <div className='flex-1 ml-2'>
                                                    <p className='text-secondary max-sm:text-[13px]'>Joined Date:</p>
                                                    <p className='mb-0 max-sm:text-[13px]'>22-11-2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2 w-full lg:pl-6 xl:pl-8  max-lg:border-l-0 border-left'>
                                        <div className='flex flex-wrap lg:flex-col justify-between h-full'>
                                            <div className='w-1/2 lg:w-full flex items-center  max-md:mt-2'>
                                                <span className="material-symbols-outlined max-sm:text-[25px] text-[35px] text-primary">location_on</span>
                                                {/* <i className='icns icon-location max-sm:w-[25px] sm:w-[32px] icon-default-filter max-sm:h-[25px] sm:h-[32px] mr-2'></i> */}
                                                <div className='flex-1 ml-2'>
                                                    <p className='text-secondary max-sm:text-[13px]'>Address:</p>
                                                    <p className='mb-0 max-sm:text-[13px]'>Not added yet</p>
                                                </div>
                                            </div>
                                            <div className='w-1/2 lg:w-full flex items-center  max-md:mt-2'>
                                                <span className="material-symbols-outlined max-sm:text-[25px] text-[35px] text-primary">redeem</span>
                                                {/* <i className='icns icon-birthday max-sm:w-[25px] sm:w-[32px] icon-default-filter max-sm:h-[25px] sm:h-[32px] mr-2'></i> */}
                                                <div className='flex-1 ml-2'>
                                                    <p className='text-secondary max-sm:text-[13px]'>Date of birth:</p>
                                                    <p className='mb-0 max-sm:text-[13px]'>Not added yet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className='mt-4'>
                    <VerticalTab  tabIcon='icon-user' tabList={ProfileTabList}>
                        <VerticalTabItem title="Personal Details" target={'PersonalDetails'}>
                            <PersonalDetailsTab ></PersonalDetailsTab>
                        </VerticalTabItem>
                        <VerticalTabItem title="Change Password" target={'ChangePassword'}>
                            <ChangePassword ></ChangePassword>
                        </VerticalTabItem>
                    </VerticalTab>
                    {/* <div className='w-full md:w-4/12 lg:w-3/12 2xl:w-2/12 md:pr-2 max-md:mb-4'>
                        <div className='h-full'>
                            <div className='h-full'>
                                <VerticalTab onChange={(event) => setActiveTab(event)} tabIcon='icon-user' activeTab={activeTab} tabList={ProfileTabList}/>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='w-full md:w-8/12 lg:w-9/12 2xl:w-10/12 md:pl-2'>
                        <div data-tab-target="PersonalDetails">
                            {
                                activeTab === "PersonalDetails" &&
                                    <PersonalDetailsTab></PersonalDetailsTab>
                            }
                            
                        </div>
                        <div data-tab-target="ChangePassword">
                            {
                                activeTab === "ChangePassword" &&
                                    <ChangePassword></ChangePassword>
                            }
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default MyProfile