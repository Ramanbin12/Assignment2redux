import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {HomePage,TrendingPage,FavouritesPage} from '../pages/index';
const ComponentRoute = () => {
  return (
   <>
   <Routes>
    <Route path="/"  element={<HomePage/>}/>
    <Route path="favourites" element={<FavouritesPage/>}/>
    <Route path="trending" element={<TrendingPage/>}/>
   </Routes>
   </>
  );
};

export default ComponentRoute;
