import React from 'react';
import {ComponentNav,ComponentButton} from '../index';
const UpperNavbar = () => {
  return (
   <>

   <div className='p-4  flex  h-[455px] justify-between flex-col text-white bg-navimg bg-no-repeat bg-cover '>
   <ComponentNav/>
    <div className='flex flex-col gap-[5px]'>
      <h2 className="text-5xl font-bold font-poppins ">Insider</h2>
      <p>2022 | Comedy horror | 1 Season</p>
      <ComponentButton/>
    </div>
   </div>
   </>
  );
};

export default UpperNavbar;
