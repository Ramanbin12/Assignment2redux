import React from 'react';
import { ComponentButton } from '../index';
import { star } from '../../assets/index';
import { useAppSelector } from '../../hooks';
const ComponentWatchDescription: React.FC = () => {
  const user = useAppSelector((state) => state.like.user);
  console.log('ghhhh', user);
  return (
    user ? (
      <div className=' flex  flex-col mt-4 lg:flex-row text-white justify-between'>
        <div className=""><img className='w-[500px] h-[400px]' src={user.img} /></div>
        <div className='flex  w-[63%] lg:w-[70%] justify-center'>
          <div className='space-y-4  lg:w-[80%] flex flex-col justify-center'>
            <div className='flex justify-between'>
              <h1 className="text-3xl lg:text-5xl font-poppins" >{user.moviename}</h1>
              <div className="flex gap-[1vw]"> <span><img src={star} /></span><span>{user.Ratings}/10</span></div>
            </div>
            <div className='flex gap-5'>
              <p>{user.releaseDate}</p>
              <p>{user.movieType}</p>
              <p>{user.numOfHours}h {user.numOfMin}min</p>
            </div>
            <div>
              {user.description}
            </div>
            <ComponentButton />
          </div>
        </div>
      </div>
    ) : <div>bjkbjbjbjb</div>
  );
};

export default ComponentWatchDescription;
