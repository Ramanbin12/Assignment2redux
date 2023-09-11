import React from 'react';
import {ComponentButton} from '../index';
import {contwatchingMovie1,star} from '../../assets/index';
const ComponentWatchDescription:React.FC = () => {
  return (
  <div className=' flex flex-col mt-4 lg:flex-row text-white justify-between'>
    <div className=""><img className='auto' src={contwatchingMovie1}/></div>
    <div className='flex  w-[70%] justify-center'>
    <div className='space-y-4  lg:w-[80%] flex flex-col justify-center'>
        <div className='flex justify-between'>
        <h1 className="text-3xl lg:text-5xl font-poppins" >House of Gucci</h1>
        <div className="flex gap-[1vw]"> <span><img src={star} /></span><span>7.8/10</span></div>
        </div>
        <div className='flex gap-5'>
            <p>2023</p>
            <p>Drama</p>
            <p>2h 38min</p>
        </div>
        <div>
        The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, 
        luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, 
        there are deep-seated tensions and secrets that threaten to tear the family apart.
        </div>
        <ComponentButton/>
      </div>
      </div>
  </div>
  );
};

export default ComponentWatchDescription;
