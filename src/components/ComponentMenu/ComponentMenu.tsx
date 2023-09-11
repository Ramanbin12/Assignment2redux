import React from 'react';
import {menu } from '../../assets/index';
// import {AppContext} from '../../components/index';
import { useAppDispatch } from '../../hooks';
import { setShowNav } from '../../redux/slices/NavbarSlice';
const ComponentMenu = () => {
  const dispatch=useAppDispatch();
  return (
    <div className="lg:hidden">
      <button onClick={()=>dispatch(setShowNav())}>
        <img src={menu} alt="Menu" />
      </button>
    </div>
  );
};

export default ComponentMenu;
