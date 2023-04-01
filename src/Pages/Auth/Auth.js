import React from 'react'

const Auth = ({Component, label, message }) => {
    console.log("immmmmmmmmmmmmm");
  return (
    <>
        <div className='p-[1.5em] xs:p-[2em] md:p-[3em] lg:p-[3em] xl:p-[4em] w-full'>
            <div className='text-center mb-[1.5em]'>
                <img src='https://www.fortelogic.in/images/flogic_logo.svg' alt='logo' className='h-auto max-w-[170px] min-w-[85px] sm:min-w-[110px] m-auto'/>
            </div>
            <div className='text-center mb-[2em]'>
                {
                    label && 
                    <h6 className='leading-4 '>{label}</h6>
                }
                {
                    message && 
                    <label>{message}</label>
                }
                
            </div>
            <Component/>
            <div className='mb-[1em] text-center mt-5'>
                Copyright @ 2022 by Fortelogic
            </div>
        </div>
        
    </>
  )
}

export default Auth