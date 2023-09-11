import React from 'react';
import { ComponentContWatch, ComponentTrending, UpperNavbar } from '../../components/index';

const HomePage = () => {
  return (
    
    <div className={`overflow-x-hidden w-[full] bg-black h-full p-4`}>
      <UpperNavbar/>
    <ComponentTrending/>
    <ComponentContWatch/>
    </div>
  
  );
};

export default HomePage;
