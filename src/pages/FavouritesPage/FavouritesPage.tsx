import React from 'react';
import {ComponentNav,ComponentFav} from '../../components/index';
const FavouritesPage = () => {
  return (
    <>
    <div className='overflow-x-hidden w-screen bg-black h-screen p-4'>

<ComponentNav/>
<ComponentFav/>
</div>
    </>
  );
};

export default FavouritesPage;
