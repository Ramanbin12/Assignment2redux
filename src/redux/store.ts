import { configureStore } from '@reduxjs/toolkit';
import NavbarSlice from '../redux/slices/NavbarSlice';
import Favourite from '../redux/slices/Favourite';
export const store=configureStore({
    reducer:{
        navbar:NavbarSlice,
        like:Favourite,
    }
});