import React from 'react';
import {heart1} from '../../assets/index';
const ComponentButton = () => {
  return (
   <>
   <div className='flex gap-[10px]'>
        <button className="px-[24px] py-[17px] bg-purple-600 rounded-[14px]">Watch now</button>
        <button className='p-[15px] bg-white rounded-[14px]'><img src={heart1}/></button>
      </div>
   </>
  );
};

export default ComponentButton;
