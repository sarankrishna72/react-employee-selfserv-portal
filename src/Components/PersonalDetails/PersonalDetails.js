import React, { useEffect, useState } from 'react'
import Select from '../Form/Select';
import Input from '../Form/Input';
import Button from '../Form/Button';

const PersonalDetails = ({profileInputs, formDetails = {}}) => {
    const [formData, setFormData] = useState({});


    useEffect(() => {
        let inputsValues =   profileInputs.map((x) => x.name)
        let obj = {}
        for (const inp of inputsValues) {
            obj[inp] = formDetails[inp] || ''     
        }
        setFormData(obj)
        console.log(inputsValues);
    },[profileInputs])

    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:  event.target.type === 'checkbox'  ? event.target.checked : event.target.value,
        });
    } 
    return (
        <>
            <form>
                {
                    profileInputs.map((inputItem, index) => 
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
                    <Button type={'submit'} classes={'min-w-[100px]'} btnType={'primary'}>Update</Button>
                    <Button type={'button'} classes={'min-w-[100px]'} btnType={'secondary'}>Reset</Button>
                </div>
            </form>
        </>
    )
}

export default PersonalDetails;