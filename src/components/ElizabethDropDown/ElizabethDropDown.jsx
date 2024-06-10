import React, { useState } from 'react';

function ElizabethDropDown() {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className='relative inline-block'>
      <button className='dropbtn bg-[#3f3e3e] w-[80px] h-[35px] rounded-[5px] flex gap-1 items-center justify-end p-1'
      onClick={() => setOpenDropDown(previousValue => !previousValue) }
      >
        <p className=''>+234</p>
        {/* dont shrink my icon  */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-[18px] w-[18px] flex-shrink-0'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </button>
      <div
        className={`absolute z-10 w-[100px] h-auto bg-[#3f3e3e] shadow-lg rounded-[5px] ${openDropDown ? 'block' : 'hidden'}`}
      >
        <div className='w-full p-2 text-center hover:bg-[#242424] cursor-pointer'>
          +1
        </div>
        <div className='w-full p-2 text-center hover:bg-[#242424] cursor-pointer'>
          +419
        </div>
        <div className='w-full p-2 text-center hover:bg-[#242424] cursor-pointer'>
          +331
        </div>
        <div className='w-full p-2 text-center hover:bg-[#242424] cursor-pointer'>
          +351
        </div>
      </div>
    </div>
  );
}

export default ElizabethDropDown;
