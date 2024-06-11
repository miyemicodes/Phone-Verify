import React, { useState } from 'react';
import ElizabethDropDown from '../ElizabethDropDown/ElizabethDropDown'

export function EnterNum({ numModalState, openVerifyNumModalState }) {

  /*  prop drilling
  do not my code shows different ways of doing a thing--- dont mind me
  this is just me playing around
  */
  const closeModal = () => numModalState(false);

  return (
    <>
      <div className='fixed inset-0 z-30 bg-gray-50/5 bg-opacity-5 backdrop-blur w-full'>
        <div className='fixed inset-0 z-40 overflow-y-auto flex justify-center items-center w-full'>
          <div className='bg-[#3f3e3e] text-[#eeebeb] flex flex-col items-center justify-center gap-2 px-4 pt-10 pb-4 w-[500px] relative'>

            <button className='absolute z-10 right-1 top-1' onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[20px w-[20px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </button>
            <h2 className='font-bold text-lg'>Enter a Phone Number</h2>
            <p className='text-sm'>
              You will receive a call with a verification code.
            </p>
            <p className='text-sm text-center'>
              Your phone Number can be used to verify one only account and for
              verification and login.
            </p>
            <div className='bg-[#312f2f] p-2 flex w-full flex-row items-center relative'>
              {/* these should be a simple custom drop down */}
              <div className='absolute left-[10px] z-10'>
                <ElizabethDropDown />
              </div>

              <input type='tel' className='bg-transparent outline-none w-full h-[40px] px-[100px]' />

              <button
                onClick={() => openVerifyNumModalState(true)}
                className='bg-[#3f3e3e] px-4 py-1 font-semibold absolute z-10 right-[10px] rounded-[5px] h-[35px] hover:bg-[#272727] cursor-pointer'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
