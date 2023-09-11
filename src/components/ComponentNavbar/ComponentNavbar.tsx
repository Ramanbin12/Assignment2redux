import React from 'react';
import { NavLink } from 'react-router-dom';
import { coffee, film, heart,trendingup, calender, users, messagecircle, sliders, logout } from '../../assets/index';
// import MenuContext from '../MenuContext/MenuContext'
import { useAppSelector } from '../../hooks';
// export const MenuContext =React.createContext({});

const ComponentNavbar:React.FC= () => {
const showNav=useAppSelector((state)=>state.navbar.showNav);
  return (
    <>
      <nav>
        <div className={` ${showNav ? 'visible md:w-[274px] px-[8px]' : 'invisible w-[0px] px-0'} 
         bg-black flex flex-col lg:visible lg:w-[274px] text-white lg:px-8  pt-[50px]  shadow-lg
          shadow-purple-400 gap-[40px] h-full`}  >
          <div className='flex gap-[1vw] ' >
            <img src={coffee} />
            <p className="flex font-bold font-poppins text-center justify-center">WATCH </p>
          </div>
          <div className=" flex h-[60%] flex-col justify-between">
            <div className='' >
              <ul>
                <div className="flex flex-col gap-[2vw] lg:gap-[1vw]">
                  <li><NavLink to="/"><span className='flex gap-[2vw] '>
                    <img src={film} /><p className='font-medium font-poppins '>Home</p></span></NavLink></li>
                  <li><NavLink to="favourites"><span className='flex gap-[2vw]' >
                    <img src={heart} /><p className='font-medium font-poppins '>Favourites</p></span></NavLink></li>
                  <li><NavLink to='trending'><span className='flex gap-[2vw]' >
                    <img src={trendingup} /><p className='font-medium font-poppins '>Trending</p></span></NavLink></li>
                  <li><span className='flex gap-[2vw]'>
                    <img src={calender} /><p className='font-medium font-poppins '>Coming soon</p></span></li>
                </div>
              </ul>
            </div>
            <div className='' >
              <ul>
                <div className="flex flex-col gap-[2vw] lg:gap-[1vw] ">
                  <li><span className='flex gap-[2vw] '>
                    <img src={users} /><p className='font-medium font-poppins '>Community</p></span></li>
                  <li><span className='flex gap-[2vw]' ><
                    img src={messagecircle} /><p className='font-medium font-poppins '>Social</p></span></li>
                </div>
              </ul>
            </div>
            <div className='' >
              <ul>
                <div className="flex flex-col gap-[2vw] lg:gap-[1vw]">
                  <li><span className='flex gap-[2vw] '>
                    <img src={sliders} /><p className='font-medium font-poppins '>Settings</p></span></li>
                  <li><span className='flex gap-[2vw]' >
                    <img src={logout} /><p className='font-medium font-poppins '>Logout</p></span></li>
                </div>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default ComponentNavbar;
