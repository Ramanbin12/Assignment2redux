import React from 'react';
import {search,bell,Ellipse} from '../../assets/index';
import {ComponentMenu} from '../index';
const ComponentNav = () => {
  return (
   <>

    <div className="  flex text-white justify-between">
     <ComponentMenu/>
    <ul className='flex hidden lg:flex p-[4px] gap-[1vw]'>
          <li>Movies</li>
          <li>Series</li>
          <li>Documentations</li>
      </ul>
     <div className='hidden p-[4px] gap-[1vw] lg:flex'>
        <img src={search}/>
        <img src={bell}/>
        <img src={Ellipse}/>
        <span>Tetiana</span>
     </div>
  </div>
   </>
  );
};

export default ComponentNav;
